import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useLang } from '../i18n/LanguageContext';
import { login as loginApi } from '../api/auth.js'

function LoginPage() {
    const { lang } = useLang();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await loginApi({ email, password });
            localStorage.setItem('srUserToken', data.token);
            window.dispatchEvent(new Event('storage'));
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <AuthLayout
            title={lang === 'ru' ? 'Войти' : 'Login'}
            footerLink={{
                prefix: {
                    ru: 'Нет аккаунта?',
                    en: 'No account?',
                },
                label: {
                    ru: 'Создать',
                    en: 'Sign up',
                },
                to: '/register',
            }}
        >
            <form onSubmit={handleSubmit}>
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
                <div className="auth__actions">
                    <button type="submit" className="btn btn--primary">
                        {lang === 'ru' ? 'Войти' : 'Login'}
                    </button>
                    <Link to="/forgot-password" className="btn btn--outline-primary" style={{ textDecoration: 'none' }}>
                        {lang === 'ru' ? 'Забыли пароль?' : 'Forgot password?'}
                    </Link>
                </div>
                {error && <p style={{ color: '#ff6b6b', textAlign: 'center' }}>{error}</p>}
            </form>
        </AuthLayout>
    );
}

export default LoginPage; 