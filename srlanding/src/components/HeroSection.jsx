import '../styles/HeroSection.scss'
import { useLang } from '../i18n/LanguageContext';

function HeroSection() {
    const { lang } = useLang();
    return (
        <section className="hero">
            <div className="container hero__content">
                <p className="hero__subtitle">{lang === 'ru' ? 'Увлекательная настольная игра теперь онлайн!' : 'Exciting tabletop game is now online!'}</p>
                <h1 className="hero__title">{lang === 'ru' ? 'Saikiong Rodus ждет вас!' : 'Saikiong Rodus is waiting for you!'}</h1>
                <div className="hero__cta">
                    <a href="https://saikiong-rodus-online.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn--primary">{lang === 'ru' ? 'Играть' : 'Play'}</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection 