import { useLang } from '../i18n/LanguageContext.jsx'
import '../styles/LanguageSwitcher.scss'

function LanguageSwitcher() {
    const { lang, toggle } = useLang()
    return (
        <button className="lang-switcher" onClick={toggle} aria-label="Switch language">
            {lang === 'ru' ? 'EN' : 'RU'}
        </button>
    )
}

export default LanguageSwitcher 