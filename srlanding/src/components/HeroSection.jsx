import '../styles/HeroSection.scss'
import { useLang } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function HeroSection() {
    const { lang } = useLang();
    const [hasToken, setHasToken] = useState(() => !!localStorage.getItem('srUserToken'));

    useEffect(() => {
        const handleStorage = () => setHasToken(!!localStorage.getItem('srUserToken'));
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return (
        <section className="hero">
            <div className="container hero__content">
                <p className="hero__subtitle">{lang === 'ru' ? 'Увлекательная настольная игра теперь онлайн!' : 'Exciting tabletop game is now online!'}</p>
                <h1 className="hero__title">{lang === 'ru' ? 'Saikiong Rodus ждет вас!' : 'Saikiong Rodus is waiting for you!'}</h1>
                <div className="hero__cta">
                    {!hasToken ? (
                        <>
                            <Link to="/login" className="btn btn--primary">{lang === 'ru' ? 'Войти' : 'Login'}</Link>
                            <Link to="/register" className="btn btn--outline-primary">{lang === 'ru' ? 'Создать аккаунт' : 'Sign up'}</Link>
                        </>
                    ) : (
                        <a href={`https://saikiong-rodus-online.vercel.app/?token=${localStorage.getItem('srUserToken')}`} target="_blank" rel="noopener noreferrer" className="btn btn--primary">{lang === 'ru' ? 'Играть' : 'Play'}</a>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HeroSection 