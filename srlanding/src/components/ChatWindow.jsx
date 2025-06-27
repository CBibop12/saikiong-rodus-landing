import { useState, useEffect, useRef } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import { getChatMessages, sendMessage } from '../api/auth.js';
import { useLang } from '../i18n/LanguageContext';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';

function ChatWindow({ chat, friendUsername, friendAvatar, onClose, currentUserId }) {
    const { lang } = useLang();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef(null);
    const socketRef = useRef(null);
    const [isFriendTyping, setIsFriendTyping] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'https://saikiongrodus-backend-e47b3de7cf19.herokuapp.com';

    useEffect(() => {
        if (chat?._id) {
            loadMessages();
        }
    }, [chat?._id]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Подключаемся к WebSocket один раз
        if (!socketRef.current) {
            const socket = io(API_URL, {
                auth: {
                    token: localStorage.getItem('srUserToken'),
                },
            });

            socket.on('connect_error', (err) => {
                console.error('WebSocket error:', err.message);
            });

            // Новое сообщение
            socket.on('new-message', (message) => {
                if (message.chatId === chat?._id) {
                    setMessages((prev) => [...prev, message]);
                }
            });

            // Индикатор печати
            socket.on('user-typing', (data) => {
                if (data.chatId === chat?._id && data.userId !== currentUserId) {
                    setIsFriendTyping(true);
                }
            });

            socket.on('user-stop-typing', (data) => {
                if (data.chatId === chat?._id && data.userId !== currentUserId) {
                    setIsFriendTyping(false);
                }
            });

            socketRef.current = socket;
        }

        // При размонтировании отключаемся
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, []);

    // Когда выбран другой чат, присоединяемся к комнате этого чата
    useEffect(() => {
        if (!chat?._id || !socketRef.current) return;

        const socket = socketRef.current;
        const join = () => socket.emit('join-chat', chat._id);

        if (socket.connected) {
            join();
        } else {
            // дождёмся establish
            socket.once('connect', join);
        }

        // cleanup – отписываемся от события connect, иначе их накопится
        return () => socket.off('connect', join);
    }, [chat?._id]);

    // Функция отправки события "печатает" с дебаунсом
    const typingTimeoutRef = useRef(null);

    const handleTyping = () => {
        if (!socketRef.current) return;
        socketRef.current.emit('typing', { chatId: chat._id });

        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = setTimeout(() => {
            socketRef.current.emit('stop-typing', { chatId: chat._id });
        }, 1000);
    };

    const loadMessages = async () => {
        try {
            setLoading(true);
            const chatData = await getChatMessages(chat._id);
            const messagesArray = Array.isArray(chatData) ? chatData : (chatData?.messages || []);
            setMessages(messagesArray);
        } catch (err) {
            console.error('Ошибка загрузки сообщений:', err);
            setMessages([]);
        } finally {
            setLoading(false);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || sending) return;

        setSending(true);
        try {
            const text = newMessage.trim();
            if (socketRef.current) {
                socketRef.current.emit('send-message', { chatId: chat._id, text });
            } else {
                await sendMessage(chat._id, text); // fallback
                loadMessages();
            }
            setNewMessage('');
        } catch (err) {
            console.error('Ошибка отправки сообщения:', err);
        } finally {
            setSending(false);
        }
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return lang === 'ru' ? 'Сегодня' : 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return lang === 'ru' ? 'Вчера' : 'Yesterday';
        } else {
            return date.toLocaleDateString('ru-RU');
        }
    };

    const groupMessagesByDate = (messages) => {
        const groups = {};
        if (!Array.isArray(messages)) {
            return groups;
        }

        messages.forEach(message => {
            const date = new Date(message.createdAt).toDateString();
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(message);
        });
        return groups;
    };

    const messageGroups = groupMessagesByDate(messages);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="chat-title">
                    <div className="chat-avatar">
                        <img src={friendAvatar} alt={friendUsername} />
                    </div>
                    <span>{friendUsername}</span>
                </div>
                <button className="close-btn" onClick={onClose}>
                    <X size={20} />
                </button>
            </div>

            <div className="chat-messages">
                {loading ? (
                    <div className="loading-messages">
                        {lang === 'ru' ? 'Загрузка сообщений...' : 'Loading messages...'}
                    </div>
                ) : (
                    <>
                        {Object.entries(messageGroups).map(([date, dayMessages]) => (
                            <div key={date} className="message-group">
                                <div className="date-separator">
                                    {formatDate(dayMessages[0].createdAt)}
                                </div>
                                {dayMessages.map((message, index) => (
                                    <div
                                        key={`${message.createdAt}-${index}`}
                                        className={`message-wrapper ${(message.sender?._id ?? message.sender) === currentUserId ? 'own' : 'other'
                                            }`}
                                    >
                                        <div className="message-bubble">
                                            <div className="message-content">
                                                {message.text}
                                            </div>
                                            <div className="message-time">
                                                {formatTime(message.createdAt)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {messages.length === 0 && !loading && (
                            <div className="empty-chat">
                                {lang === 'ru'
                                    ? 'Сообщений пока нет. Начните беседу!'
                                    : 'No messages yet. Start the conversation!'
                                }
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                        {isFriendTyping && (
                            <div className="typing-indicator">
                                {lang === 'ru' ? 'Печатает...' : 'Typing...'}
                            </div>
                        )}
                    </>
                )}
            </div>

            <form className="chat-input" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => {
                        setNewMessage(e.target.value);
                        handleTyping();
                    }}
                    placeholder={lang === 'ru' ? 'Введите сообщение...' : 'Type a message...'}
                    disabled={sending}
                />
                <button type="submit" disabled={!newMessage.trim() || sending}>
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}

ChatWindow.propTypes = {
    chat: PropTypes.object.isRequired,
    friendUsername: PropTypes.string.isRequired,
    friendAvatar: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    currentUserId: PropTypes.string.isRequired,
};

export default ChatWindow; 