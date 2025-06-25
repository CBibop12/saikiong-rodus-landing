import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useLang } from '../i18n/LanguageContext';
import { register as registerApi } from '../api/auth.js'

function RegisterPage() {
    const { lang } = useLang();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            alert(lang === 'ru' ? 'Пароли не совпадают' : 'Passwords do not match');
            return;
        }
        try {
            await registerApi({ username, email, password });
            navigate('/email-sent');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <AuthLayout
            title={lang === 'ru' ? 'Создать аккаунт' : 'Create account'}
            footerLink={{
                prefix: {
                    ru: 'Уже есть аккаунт?',
                    en: 'Already have an account?',
                },
                label: {
                    ru: 'Войти',
                    en: 'Login',
                },
                to: '/login',
            }}
        >
            <form onSubmit={handleSubmit}>
                <input
                    placeholder={lang === 'ru' ? 'Имя пользователя' : 'Username'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder={lang === 'ru' ? 'E-mail' : 'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder={lang === 'ru' ? 'Пароль' : 'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder={lang === 'ru' ? 'Повторить пароль' : 'Confirm password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <div className="auth__actions single-btn">
                    <button type="submit" className="btn btn--primary">
                        {lang === 'ru' ? 'Создать' : 'Sign up'}
                    </button>
                </div>
                {error && <p style={{ color: '#ff6b6b', textAlign: 'center' }}>{error}</p>}
            </form>
        </AuthLayout>
    );
}

export default RegisterPage; 