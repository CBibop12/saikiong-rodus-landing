import { useLang } from '../i18n/LanguageContext'
import '../styles/HowToPlaySection.scss'

const steps = [
    {
        number: 1,
        titleEn: 'Pick Your Heroes',
        textEn: 'Browse through dozens of unique characters, each with distinct abilities and play-styles.',
        titleRu: 'Выберите своих героев',
        textRu: 'Просмотрите десятки уникальных персонажей, каждый из которых обладает уникальными способностями и стилями игры.'
    },
    {
        number: 2,
        titleEn: 'Form a Squad',
        textEn: 'Team up with friend or watch other players worldwide. Build balanced compositions for every map.',
        titleRu: 'Сформируйте команду',
        textRu: 'Соберитесь с другом или смотрите за партиями игроков по всему миру. Создайте сбалансированные составы для каждой карты.'
    },
    {
        number: 3,
        titleEn: 'Master the Rules',
        textEn: 'Combinations of characters, ranges, terrain bonuses — all derived from the official SR rulebook and easy to learn.',
        titleRu: 'Освойте правила',
        textRu: 'Комбинации персонажей, диапазоны, бонусы местности — все выведены из официальной книги правил SR и легко изучить.'
    },
    {
        number: 4,
        titleRu: 'Сражайтесь!',
        textRu: 'Столкнитесь с персонажами, захватывайте территорию, разрушайте вражеские базы — каждый аспект игры требует новой тактики.',
        titleEn: 'Fight!',
        textEn: 'Face with your team against other characters, capture territories, destroy enemy bases — every aspect of the game requires a new tactic.',
    },
    {
        number: 5,
        titleEn: 'Climb the Ladder',
        textEn: 'Win matches, earn glory and get rewards in seasonal ranked leagues.',
        titleRu: 'Поднимитесь по лестнице',
        textRu: 'Выиграйте матчи, заработайте славу и получите вознаграждение в сезонных лигах.'
    }
]

function HowToPlaySection() {
    const { lang } = useLang()
    return (
        <section className="how-to-play">
            <div className="container">
                <h2 className="how-to-play__heading">{lang === 'ru' ? 'Как играть' : 'How to Play'}</h2>
                <ul className="how-to-play__list">
                    {steps.map((s) => (
                        <li key={s.number} className="how-to-play__item">
                            <span className="how-to-play__number">{s.number}</span>
                            <div>
                                <h3>{lang === 'ru' ? s.titleRu : s.titleEn}</h3>
                                <p>{lang === 'ru' ? s.textRu : s.textEn}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default HowToPlaySection 