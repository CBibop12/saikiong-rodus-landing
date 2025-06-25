import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getUserProfile,
    updateUserProfile,
    getChat,
} from '../api/auth.js';
import '../styles/ProfilePage.scss';
import { User, LoaderCircle, Camera, X } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import AvatarUploader from '../components/AvatarUploader.jsx'
import FriendsSearch from '../components/FriendsSearch';
import ChatWindow from '../components/ChatWindow';

const RANKS = [
    { name: 'Novice', mmr: 0 },
    { name: 'Apprentice', mmr: 5000 },
    { name: 'Adept', mmr: 15000 },
    { name: 'Expert', mmr: 50000 },
    { name: 'Elite', mmr: 100000 },
    { name: 'Master', mmr: 150000 },
    { name: 'Grandmaster', mmr: 200000 },
    { name: 'Champion', mmr: 300000 },
    { name: 'Legend', mmr: 400000 },
    { name: 'Mythic', mmr: 500000 },
];

function getRank(mmr) {
    for (let i = RANKS.length - 1; i >= 0; i--) {
        if (mmr >= RANKS[i].mmr) return { ...RANKS[i], index: i };
    }
    return { ...RANKS[0], index: 0 };
}

function ProfilePage() {
    const { lang } = useLang();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [tab, setTab] = useState('overview');
    const [showRankModal, setShowRankModal] = useState(false);
    const [form, setForm] = useState({ username: '', bio: '', avatar: '' });
    const [saving, setSaving] = useState(false);
    const [activeChat, setActiveChat] = useState(null);
    const [saveError, setSaveError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const profile = await getUserProfile();
                setData(profile);
                setForm({ username: profile.username, bio: profile.bio || '', avatar: profile.avatar || '' });
            } catch (err) {
                setError(err.message);
                if (err.message === 'No token' || err.message === 'Invalid token') {
                    navigate('/login');
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [navigate]);

    const rankInfo = data ? getRank(data.mmr) : null;
    const nextRank = rankInfo && RANKS[rankInfo.index + 1];
    const progress = nextRank ? ((data.mmr - rankInfo.mmr) / (nextRank.mmr - rankInfo.mmr)) * 100 : 100;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaveError('');
        setSaving(true);
        try {
            const updated = await updateUserProfile(form);
            setData(updated);
        } catch (err) {
            setSaveError(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleChatOpen = async (friendId, friendUsername, friendAvatar) => {
        try {
            console.log(friendId, friendUsername, friendAvatar);
            const chat = await getChat(friendId);
            setActiveChat({ chat, friendId, friendUsername, friendAvatar});
        } catch (err) {
            console.error('Ошибка получения чата:', err);
        }
    };

    const handleChatClose = () => {
        setActiveChat(null);
    };

    if (loading) {
        return (
            <div className="profile-page loading-center">
                <LoaderCircle size={48} className="spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="profile-page loading-center">
                <p style={{ color: '#ff6b6b' }}>{error}</p>
            </div>
        );
    }

    const games = data.games || [];
    const heroes = Array.from(new Set(games.map((g) => g.hero))).slice(0, 12);

    return (
        <div className="profile-page">
            <div className="profile-container">
                {/* Sidebar with profile info */}
                <div className="profile-sidebar">
                    <div className="profile-card">
                        <div className="avatar-wrapper">
                            <AvatarUploader current={data.avatar} onUpload={(val) => setForm(prev => ({ ...prev, avatar: val }))} />
                        </div>
                        <h2>{data.username}</h2>
                        <p>{data.bio}</p>
                        <div className="social-info">
                            <div className="social-info-item">
                                <span className="stat-value">{data.followers.length || 0}</span>
                                <span className="stat-label"> {lang === 'ru' ? `${data.followers.length === 1 ? 'Подписчик' : data.followers.length === 2 || data.followers.length === 3 || data.followers.length === 4 ? 'Подписчика' : 'Подписчиков'}` : `${data.followers.length === 1 ? 'Follower' : data.followers.length === 2 || data.followers.length === 3 || data.followers.length === 4 ? 'Followers' : 'Followers'}`}</span>
                            </div>
                            <div className="social-info-item">
                                <span className="stat-value">{data.following.length || 0}</span>
                                <span className="stat-label"> {lang === 'ru' ? `${data.following.length === 1 ? 'Подписка' : data.following.length === 2 || data.following.length === 3 || data.following.length === 4 ? 'Подписки' : 'Подписок'}` : `${data.following.length === 1 ? 'Following' : data.following.length === 2 || data.following.length === 3 || data.following.length === 4 ? 'Following' : 'Following'}`}</span>
                            </div>
                        </div>
                        <div className="rank-info">
                            <div className="mmr-rank" onClick={() => setShowRankModal(true)}>
                                <span className="rank">{rankInfo.name}</span>
                                <span className="mmr">{data.mmr} MMR</span>
                            </div>
                            {nextRank && (
                                <div className="progress-container">
                                    <div className="progress-label">
                                        <span>{lang === 'ru' ? 'Прогресс' : 'Progress'}</span>
                                        <span>{nextRank.name}</span>
                                    </div>
                                    <div className="progress">
                                        <div className="bar" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Stats card */}
                    <div className="stats-card">
                        <h3>{lang === 'ru' ? 'Статистика' : 'Statistics'}</h3>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-value">{games.length}</span>
                                <span className="stat-label">{lang === 'ru' ? 'Игр' : 'Games'}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{games.filter(g => g.result === 'Win').length}</span>
                                <span className="stat-label">{lang === 'ru' ? 'Побед' : 'Wins'}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{heroes.length}</span>
                                <span className="stat-label">{lang === 'ru' ? 'Героев' : 'Heroes'}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{Math.round((games.filter(g => g.result === 'Win').length / Math.max(games.length, 1)) * 100)}%</span>
                                <span className="stat-label">{lang === 'ru' ? 'Винрейт' : 'Win Rate'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content area */}
                <div className="profile-main">
                    {/* Tabs nav */}
                    <div className="tabs-nav">
                        <button className={tab === 'overview' ? 'active' : ''} onClick={() => setTab('overview')}>
                            {lang === 'ru' ? 'Обзор' : 'Overview'}
                        </button>
                        <button className={tab === 'games' ? 'active' : ''} onClick={() => setTab('games')}>
                            {lang === 'ru' ? 'Игры' : 'Games'}
                        </button>
                        <button className={tab === 'heroes' ? 'active' : ''} onClick={() => setTab('heroes')}>
                            {lang === 'ru' ? 'Герои' : 'Heroes'}
                        </button>
                        <button className={tab === 'friends' ? 'active' : ''} onClick={() => setTab('friends')}>
                            {lang === 'ru' ? 'Друзья' : 'Friends'}
                        </button>
                        <button className={tab === 'settings' ? 'active' : ''} onClick={() => setTab('settings')}>
                            {lang === 'ru' ? 'Настройки' : 'Settings'}
                        </button>
                    </div>

                    {/* Tab content */}
                    <div className="tab-content">
                        {tab === 'overview' && (
                            <div className="overview-tab">
                                <h3>{lang === 'ru' ? 'Последние игры' : 'Recent Games'}</h3>
                                {games.length === 0 ? (
                                    <p>{lang === 'ru' ? 'Игр пока нет' : 'No games played yet.'}</p>
                                ) : (
                                    <ul className="games-list">
                                        {games.slice(0, 5).map((g) => (
                                            <li key={g.id}>
                                                <span>{new Date(g.date).toLocaleDateString()}</span>
                                                <span>{g.hero}</span>
                                                <span>{g.result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                        {tab === 'games' && (
                            <div className="games-tab">
                                <h3>{lang === 'ru' ? 'Все игры' : 'All Games'}</h3>
                                {games.length === 0 ? (
                                    <p>{lang === 'ru' ? 'Игр пока нет' : 'No games'}</p>
                                ) : (
                                    <ul className="games-list full">
                                        {games.map((g) => (
                                            <li key={g.id}>
                                                <span>{new Date(g.date).toLocaleString()}</span>
                                                <span>{g.hero}</span>
                                                <span>{g.result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                        {tab === 'heroes' && (
                            <div className="heroes-tab">
                                <h3>{lang === 'ru' ? 'Любимые герои' : 'Favorite Heroes'}</h3>
                                {heroes.length === 0 ? (
                                    <p>{lang === 'ru' ? 'Нет сыгранных героев' : 'No heroes data'}</p>
                                ) : (
                                    <div className="heroes-grid">
                                        {heroes.map((h) => (
                                            <div key={h} className="hero-card">
                                                <img src={`/assets/images/heroes/${h}.png`} alt={h} />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                        {tab === 'friends' && (
                            <div className="friends-tab">
                                <FriendsSearch onChatOpen={handleChatOpen} />
                            </div>
                        )}
                        {tab === 'settings' && (
                            <div className="settings-tab">
                                <h3>{lang === 'ru' ? 'Настройки профиля' : 'Profile Settings'}</h3>
                                <form onSubmit={handleSave}>
                                    <label>
                                        {lang === 'ru' ? 'Аватар (URL)' : 'Avatar URL'}
                                        <input
                                            disabled={true}
                                            name="avatar"
                                            value={form.avatar}
                                            onChange={handleChange}
                                            placeholder="https://..."
                                        />
                                    </label>
                                    <label>
                                        {lang === 'ru' ? 'Никнейм' : 'Username'}
                                        <input name="username" value={form.username} onChange={handleChange} required />
                                    </label>
                                    <label>
                                        {lang === 'ru' ? 'Био' : 'Bio'}
                                        <textarea
                                            name="bio"
                                            value={form.bio}
                                            onChange={handleChange}
                                            rows={3}
                                            maxLength={300}
                                            placeholder={lang === 'ru' ? 'Расскажите о себе...' : 'Tell us about yourself...'}
                                        />
                                    </label>
                                    {saveError && (
                                        <div className="error-message">
                                            {saveError}
                                        </div>
                                    )}
                                    <button type="submit" className="btn btn--primary" disabled={saving}>
                                        {saving ? (lang === 'ru' ? 'Сохраняю...' : 'Saving...') : lang === 'ru' ? 'Сохранить' : 'Save'}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {activeChat && (
                <ChatWindow
                    chat={activeChat.chat}
                    friendId={activeChat.friendId}
                    friendUsername={activeChat.friendUsername}
                    friendAvatar={activeChat.friendAvatar}
                    onClose={handleChatClose}
                    currentUserId={data?._id || data?.id}
                />
            )}

            {/* Rank modal */}
            {showRankModal && (
                <div className="rank-modal">
                    <div className="modal-content">
                        <button className="close" onClick={() => setShowRankModal(false)}>
                            <X size={20} />
                        </button>
                        <h3>{lang === 'ru' ? 'Ранги' : 'Ranks'}</h3>
                        <ul>
                            {RANKS.map((r, idx) => (
                                <li key={r.name} className={idx === rankInfo.index ? 'current' : ''}>
                                    <span>{r.name}</span>
                                    <span>{r.mmr} MMR</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePage; 