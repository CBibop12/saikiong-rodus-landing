import { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useLang } from '../i18n/LanguageContext'
import '../styles/Navbar.scss'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { lang } = useLang()
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="navbar">
            <nav className="container navbar__container">
                <button className="navbar__toggle" onClick={toggleMenu}>
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                </button>
                <ul className={`navbar__links navbar__links--left ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'О нас' : 'About'}</a></li>
                    <li><a href="#heroes" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Герои' : 'Heroes'}</a></li>
                </ul>

                <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
                    <img src={"/logo.svg"} alt="logo" />
                </Link>

                <ul className={`navbar__links navbar__links--right ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#items" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Предметы' : 'Items'}</a></li>
                    <li><a href="#rules" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Правила' : 'Rules'}</a></li>
                    <li><a href="#blog" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Блог' : 'Blog'}</a></li>
                    <li><LanguageSwitcher /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar 