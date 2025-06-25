import '../styles/AuthPage.scss';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

function AuthLayout({ title, children, footerLink }) {
    const { lang } = useLang();

    return (
        <div className="auth-page">
            <div className="auth-page__container">
                <h2>{title}</h2>
                {children}
                {footerLink && (
                    <div className="auth__footer-link">
                        {footerLink.prefix[lang]}
                        &nbsp;
                        <Link to={footerLink.to}>{footerLink.label[lang]}</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AuthLayout; 