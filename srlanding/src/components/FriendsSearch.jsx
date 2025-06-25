import React, { useState, useEffect } from 'react';
import { Search, Users, UserPlus, UserMinus, Heart, Send, Check, X, UserCheck } from 'lucide-react';
import { searchUsers, getFollowers, getFollowing, getFriends, followUser, unfollowUser } from '../api/auth';
import { useLang } from '../i18n/LanguageContext';
import PropTypes from 'prop-types';

// Константы для вкладок
const TABS = {
    FOLLOWERS: 'followers',
    FOLLOWING: 'following',
    FRIENDS: 'friends',
    SEARCH: 'search'
};

const FriendsSearch = ({ onChatOpen }) => {
    const { lang } = useLang();
    const [activeTab, setActiveTab] = useState('search');
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [followingList, setFollowingList] = useState([]);
    const [followersList, setFollowersList] = useState([]);
    const usersPerPage = 20;

    // Загрузка данных о подписках и подписчиках при монтировании
    useEffect(() => {
        loadUserConnections();
    }, []);

    // Загрузка данных при смене вкладки или страницы
    useEffect(() => {
        loadData();
    }, [activeTab, currentPage]);

    // Поиск при изменении поискового запроса
    useEffect(() => {
        if (activeTab === TABS.SEARCH && searchQuery.trim()) {
            const debounceTimer = setTimeout(() => {
                setCurrentPage(1);
                loadData();
            }, 300);
            return () => clearTimeout(debounceTimer);
        } else if (activeTab !== TABS.SEARCH) {
            // Для других вкладок фильтруем уже загруженные данные
            filterLoadedData();
        }
    }, [searchQuery]);

    const loadUserConnections = async () => {
        try {
            const [followingResponse, followersResponse] = await Promise.all([
                getFollowing(),
                getFollowers()
            ]);
            console.log(followingResponse);
            console.log(followersResponse);

            setFollowingList(followingResponse);
            setFollowersList(followersResponse);
        } catch (error) {
            console.error('Ошибка загрузки связей пользователя:', error);
        }
    };

    const loadData = async () => {
        setLoading(true);
        try {
            let response;

            switch (activeTab) {
                case TABS.FOLLOWERS:
                    response = await getFollowers();
                    setUsers(response || []);
                    setTotalUsers(response.length || 0);
                    break;

                case TABS.FOLLOWING:
                    response = await getFollowing();
                    setUsers(response || []);
                    setTotalUsers(response.length || 0);
                    break;

                case TABS.FRIENDS:
                    response = await getFriends();
                    setUsers(response || []);
                    setTotalUsers(response.length || 0);
                    break;
                case TABS.SEARCH:
                    if (searchQuery.trim()) {
                        response = await searchUsers(searchQuery.trim(), currentPage, usersPerPage);
                        setUsers(response || []);
                        setTotalUsers(response.length || 0);
                    } else {
                        setUsers([]);
                        setTotalUsers(0);
                    }
                    break;

                default:
                    setUsers([]);
                    setTotalUsers(0);
            }
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
            setUsers([]);
            setTotalUsers(0);
        } finally {
            setLoading(false);
        }
    };

    const filterLoadedData = () => {
        if (!searchQuery.trim()) return;

        const filtered = users.filter(user =>
            user.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Здесь можно обновить отображаемый список без изменения основного состояния
        // Для простоты пока оставим как есть
        setUsers(filtered);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
        setSearchQuery('');
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFollow = async (userId) => {
        try {
            const isFollowing = followingList.some(user => user._id === userId || user.id === userId);

            if (isFollowing) {
                await unfollowUser(userId);
                setFollowingList(prev => prev.filter(user => user._id !== userId && user.id !== userId));
            } else {
                await followUser(userId);
                const userToAdd = users.find(user => user._id === userId || user.id === userId);
                if (userToAdd) {
                    setFollowingList(prev => [...prev, userToAdd]);
                }
            }

            // Обновляем список пользователей если мы на вкладке подписок
            if (activeTab === TABS.FOLLOWING) {
                loadData();
            }
        } catch (error) {
            console.error('Ошибка при подписке/отписке:', error);
        }
    };

    const isUserFollowing = (userId) => {
        return followingList.some(user => user._id === userId || user.id === userId);
    };

    const isUserFollower = (userId) => {
        return followersList.some(user => user._id === userId || user.id === userId);
    };

    const isMutualFollow = (userId) => {
        return isUserFollowing(userId) && isUserFollower(userId);
    };

    const getDisplayedUsers = () => {
        if (activeTab === TABS.SEARCH) {
            return users;
        }

        // Для других вкладок применяем фильтр поиска если он есть
        if (searchQuery.trim()) {
            return users.filter(user =>
                user.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return users;
    };

    const displayedUsers = getDisplayedUsers();
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    const tabLabels = {
        [TABS.FOLLOWERS]: lang === 'ru' ? 'Подписчики' : 'Followers',
        [TABS.FOLLOWING]: lang === 'ru' ? 'Подписки' : 'Following',
        [TABS.FRIENDS]: lang === 'ru' ? 'Друзья' : 'Friends',
        [TABS.SEARCH]: lang === 'ru' ? 'Поиск' : 'Search'
    };

    const tabIcons = {
        [TABS.FOLLOWERS]: Users,
        [TABS.FOLLOWING]: UserCheck,
        [TABS.FRIENDS]: Heart,
        [TABS.SEARCH]: Search
    };

    return (
        <div className="friends-search">
            <div className="search-header">
                <h3>
                    <Users size={20} />
                    {lang === 'ru' ? 'Социальные связи' : 'Social Connections'}
                </h3>
            </div>

            {/* Вкладки */}
            <div className="tabs">
                {Object.values(TABS).map(tab => {
                    const Icon = tabIcons[tab];
                    const count = tab === TABS.SEARCH ? null : (
                        tab === TABS.FOLLOWING ? followingList.length : followersList.length
                    );

                    return (
                        <button
                            key={tab}
                            className={`tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            <Icon size={16} />
                            <span>{tabLabels[tab]}</span>
                            {count !== null && (
                                <span className="tab-count">{count}</span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Поиск (скрыт для вкладки заявок) */}
            {activeTab !== TABS.REQUESTS && (
                <div className="search-input-wrapper">
                    <Search className="search-icon" size={16} />
                    <input
                        type="text"
                        className="search-input"
                        placeholder={
                            activeTab === TABS.SEARCH
                                ? (lang === 'ru' ? 'Поиск пользователей...' : 'Search users...')
                                : `${lang === 'ru' ? 'Поиск среди' : 'Search among'} ${tabLabels[activeTab].toLowerCase()}...`
                        }
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            )}

            {/* Результаты */}
            <div className="search-results">
                {loading ? (
                    <div className="loading-state">
                        {lang === 'ru' ? 'Загрузка...' : 'Loading...'}
                    </div>
                ) : displayedUsers.length === 0 ? (
                    <div className="empty-state">
                        {activeTab === TABS.SEARCH && !searchQuery.trim()
                            ? (lang === 'ru' ? 'Начните вводить для поиска пользователей' : 'Start typing to search for users')
                            : (lang === 'ru' ? 'Пользователи не найдены' : 'No users found')}
                    </div>
                ) : (
                    displayedUsers.map((user) => (
                        <div key={user._id || user.id} className="user-result">
                            <div className="user-info">
                                <div className="user-avatar">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt={user.username} />
                                    ) : (
                                        <div className="avatar-placeholder">
                                            {user.username?.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </div>
                                <div className="user-details">
                                    <div className="username">{user.username}</div>
                                    <div className="user-status">
                                        {isMutualFollow(user._id || user.id) && (lang === 'ru' ? 'Взаимные подписки' : 'Mutual follow')}
                                        {!isMutualFollow(user._id || user.id) && isUserFollower(user._id || user.id) && (lang === 'ru' ? 'Подписан на вас' : 'Follows you')}
                                        {!isMutualFollow(user._id || user.id) && isUserFollowing(user._id || user.id) && (lang === 'ru' ? 'Вы подписаны' : 'You follow')}
                                    </div>
                                </div>
                            </div>
                            <div className="user-actions">
                                <button
                                    className={`action-btn follow-btn ${isUserFollowing(user._id || user.id) ? 'following' : ''}`}
                                            onClick={() => handleFollow(user._id || user.id)}
                                            title={isUserFollowing(user._id || user.id) ? (lang === 'ru' ? 'Отписаться' : 'Unfollow') : (lang === 'ru' ? 'Подписаться' : 'Follow')}
                                        >
                                            {isUserFollowing(user._id || user.id) ? <UserMinus size={16} /> : <UserPlus size={16} />}
                                        </button>
                                        <button
                                            className="action-btn chat-btn"
                                            onClick={() => onChatOpen(user._id || user.id, user.username, user.avatar)}
                                            title={lang === 'ru' ? 'Написать сообщение' : 'Send message'}
                                        >
                                            <Send size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Пагинация (только для поиска) */}
            {activeTab === TABS.SEARCH && totalPages > 1 && (
                <div className="pagination">
                    <button
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        ←
                    </button>
                    <span className="pagination-info">
                        {lang === 'ru' ? 'Страница' : 'Page'} {currentPage} {lang === 'ru' ? 'из' : 'of'} {totalPages}
                    </span>
                    <button
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        →
                    </button>
                </div>
            )}

            {/* Информация о результатах */}
            {displayedUsers.length > 0 && (
                <div className="results-info">
                    {activeTab === TABS.SEARCH
                        ? (lang === 'ru' ? `Найдено ${totalUsers} пользователей` : `Found ${totalUsers} users`)
                        : (lang === 'ru' ? `Показано ${displayedUsers.length} из ${users.length}` : `Showing ${displayedUsers.length} of ${users.length}`)
                    }
                </div>
            )}
        </div>
    );
};

FriendsSearch.propTypes = {
    onChatOpen: PropTypes.func.isRequired,
};

export default FriendsSearch;