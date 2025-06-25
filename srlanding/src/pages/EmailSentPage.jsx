import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useLang } from '../i18n/LanguageContext';

function EmailSentPage() {
    const { lang } = useLang();

    const description =
        lang === 'ru'
            ? 'Ссылка для подтверждения была отправлена на вашу почту.'
            : 'A confirmation link has been sent to your email.';

    return (
        <AuthLayout title={lang === 'ru' ? 'Письмо отправлено' : 'Email sent'}>
            <p style={{ textAlign: 'center' }}>{description}</p>
            <div className="auth__actions single-btn" style={{ justifyContent: 'center' }}>
                <Link to="/" className="btn btn--primary">
                    {lang === 'ru' ? 'На главную' : 'Back to home'}
                </Link>
            </div>
        </AuthLayout>
    );
}

export default EmailSentPage; 