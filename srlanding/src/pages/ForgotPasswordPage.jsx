import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useLang } from '../i18n/LanguageContext';
import { forgotPassword as forgotPasswordApi } from '../api/auth.js'

function ForgotPasswordPage() {
    const { lang } = useLang();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await forgotPasswordApi(email);
            navigate('/email-sent');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <AuthLayout title={lang === 'ru' ? 'Восстановить пароль' : 'Reset password'}>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder={lang === 'ru' ? 'E-mail' : 'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="auth__actions">
                    <button type="submit" className="btn btn--primary">
                        {lang === 'ru' ? 'Отправить' : 'Send'}
                    </button>
                </div>
            </form>
            {error && <p style={{ color: '#ff6b6b', textAlign: 'center' }}>{error}</p>}
        </AuthLayout>
    );
}

export default ForgotPasswordPage; 