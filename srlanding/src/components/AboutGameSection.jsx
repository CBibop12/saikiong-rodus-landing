import '../styles/AboutGameSection.scss'
import { useLang } from '../i18n/LanguageContext';
function AboutGameSection() {
    const { lang } = useLang();
    return (
        <section id="about" className="about-game">
            <div className="container about-game__wrapper">
                <div className="about-game__text">
                    <h2>{lang === 'ru' ? 'Что такое Saikiong Rodus?' : 'What is Saikiong Rodus?'}</h2>
                    <p>
                        {lang === 'ru' ? 'Saikiong Rodus - это соревновательная многопользовательская игра в жанре action-стратегия, где две команды по пять героев соревнуются в быстрых, цель-ориентированных матчах. Выберите из растущего списка уникальных персонажей, объедините их способности с вашими союзниками и выиграйте, обдумав ход противника.' : 'Saikiong Rodus is a competitive multiplayer action-strategy game where two squads of five heroes clash in fast-paced, objective-based matches. Choose from a growing roster of unique characters, combine their abilities with your team-mates and outsmart the enemy to claim victory.'}
                    </p>
                    <p>
                        {lang === 'ru' ? 'Вдохновленный настольной версией "Saikiong Rodus" (4-я редакция), цифровая версия предлагает глубокие тактические стратегии и захватывающие сражения. Каждый герой обладает уникальными способностями, диапазоном и перезарядкой, которые сбалансированы в соответствии с официальными правилами, обеспечивая справедливую и основанную на навыках игру.' : 'Inspired by the tabletop rule-set "Saikiong Rodus" (4th edition), the digital arena brings tactical depth and thrilling combat to life. Every hero\'s power, range and cooldown are balanced according to the official rulebook, ensuring fair and skill-based gameplay.'}
                    </p>
                </div>
                <div className="about-game__media">
                    <img
                        src="src/assets/images/gameplay.png"
                        alt="Gameplay screenshot"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutGameSection 