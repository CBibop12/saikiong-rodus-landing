const API_URL = import.meta.env.VITE_API_URL || 'https://saikiong-rodus-auth-c8c14634e053.herokuapp.com';

async function handleResponse(res) {
    const data = await res.json().catch(() => null);
    if (!res.ok) {
        // Сервер может вернуть массив errors от express-validator или message
        const message = data?.message || (Array.isArray(data?.errors) ? data.errors.map(e => e.msg).join('\n') : 'Unknown error');
        throw new Error(message);
    }
    return data;
}

export async function register({ email, password, username }) {
    const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
    });
    return handleResponse(res);
}

export async function login({ email, password }) {
    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return handleResponse(res);
}

export async function forgotPassword(email) {
    const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    });
    return handleResponse(res);
}

export function getAuthHeaders() {
    const token = localStorage.getItem('srUserToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getProfile() {
    const res = await fetch(`${API_URL}/api/profile`, {
        headers: { ...getAuthHeaders() },
    });
    return handleResponse(res);
}

export async function updateProfile(updates) {
    const res = await fetch(`${API_URL}/api/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
        },
        body: JSON.stringify(updates),
    });
    return handleResponse(res);
}

// Поиск пользователей
export const searchUsers = async (search) => {
    const response = await fetch(`${API_URL}/api/users/search?q=${encodeURIComponent(search)}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('srUserToken')}`
        }
    });

    if (!response.ok) {
        throw new Error('Ошибка поиска пользователей');
    }

    return response.json();
};

// ====== Friends & Followers endpoints ======
// Получение подписчиков с пагинацией
export async function getFollowers() {
    const response = await fetch(`${API_URL}/api/users/followers`, {
        headers: {
            ...getAuthHeaders(),
        },
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка получения подписчиков';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// Получение подписок с пагинацией
export async function getFollowing() {
    const response = await fetch(`${API_URL}/api/users/following`, {
        headers: {
            ...getAuthHeaders(),
        },
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка получения подписок';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// Получение друзей (взаимные подписки) с пагинацией
export async function getFriends() {
    const response = await fetch(`${API_URL}/api/users/friends`, {
        headers: {
            ...getAuthHeaders(),
        },
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка получения друзей';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// Подписаться на пользователя
export async function followUser(userId) {
    const response = await fetch(`${API_URL}/api/users/${userId}/follow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
        },
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка подписки на пользователя';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// Отписаться от пользователя
export async function unfollowUser(userId) {
    const response = await fetch(`${API_URL}/api/users/${userId}/unfollow`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
        },
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка отписки от пользователя';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// Создание или получение чата с пользователем
export async function getChat(friendId) {
    const response = await fetch(`${API_URL}/api/chats/${friendId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
        },
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка создания чата';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// Получение сообщений из чата
export async function getChatMessages(chatId) {
    const response = await fetch(`${API_URL}/api/chats/${chatId}`, {
        method: 'GET', // явно указываем метод
        headers: {
            ...getAuthHeaders(),
        },
        // убираем body - он не нужен для GET запроса
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка получения сообщений';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// Отправка сообщения в чат
export async function sendMessage(chatId, text) {
    const response = await fetch(`${API_URL}/api/chats/${chatId}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
        },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        let errorMsg = 'Ошибка отправки сообщения';
        try {
            const errJson = await response.json();
            errorMsg = errJson?.message || errorMsg;
        } catch { /* ignore JSON parse error */ void 0; }
        throw new Error(errorMsg);
    }

    return response.json();
}

// ====== Profile helpers with new naming ======
export async function getUserProfile() {
    return getProfile();
}

export async function updateUserProfile(updates) {
    return updateProfile(updates);
}

// ====== Games & Heroes endpoints ======
// Последние игры пользователя
export async function getRecentGames(limit = 10) {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/api/games/recent?limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return handleResponse(res);
}

// Все игры пользователя
export async function getAllGames() {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/api/games`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return handleResponse(res);
}

// Любимые герои пользователя
export async function getFavoriteHeroes() {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/api/heroes/favorites`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return handleResponse(res);
} 