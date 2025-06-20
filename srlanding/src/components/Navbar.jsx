import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useLang } from '../i18n/LanguageContext'
import '../styles/Navbar.scss'
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { lang } = useLang()

    const toggleMenu = () => setIsOpen(!isOpen)

    // Блокируем скролл страницы когда меню открыто
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Очищаем при размонтировании компонента
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <header className="navbar">
            <nav className="container navbar__container">
                <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
                    <img src={"/assets/images/logoWhite.svg"} alt="logo" />
                </Link>

                <ul className={`navbar__links navbar__links--left ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'О нас' : 'About'}</a></li>
                    <li><a href="#heroes" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Герои' : 'Heroes'}</a></li>
                </ul>

                <ul className={`navbar__links navbar__links--right ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#items" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Предметы' : 'Items'}</a></li>
                    <li><a href="https://saikiongrodus.freeflarum.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Форум' : 'Forum'}</a></li>
                    <li><a href="#blog" onClick={() => setIsOpen(false)}>{lang === 'ru' ? 'Блог' : 'Blog'}</a></li>
                    <li><LanguageSwitcher /></li>
                </ul>

                <button className="navbar__toggle" onClick={toggleMenu}>
                    {isOpen ? <CloseIcon size={32} color="#fff" /> : <MenuIcon size={32} color="#fff" />}
                </button>
            </nav>
        </header>
    )
}

export default Navbar 