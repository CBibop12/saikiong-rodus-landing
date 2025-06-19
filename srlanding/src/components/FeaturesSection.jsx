import '../styles/FeaturesSection.scss'
import { useLang } from '../i18n/LanguageContext';
const features = [
    {
        titleEn: 'Gaming Spanning',
        descriptionEn: 'Participate in cross-platform events and tournaments that span the whole world.',
        titleRu: 'Гейминг на всех платформах',
        descriptionRu: 'Участвовать в межплатформенных событиях и турнирах, которые охватывают весь мир.'
    },
    {
        titleEn: 'Action-Packed',
        descriptionEn: 'Experience heart-pounding matches with the best players on the planet.',
        titleRu: 'Стресс-тест',
        descriptionRu: 'Ощутите стресс от матчей с лучшими игроками на планете.'
    },
    {
        titleEn: 'Mind-Bending',
        descriptionEn: 'Plan, calculate and outplay rivals in this thrilling tournament.',
        titleRu: 'Умственное напряжение',
        descriptionRu: 'Планируйте, расчитывайте и побеждайте в этом захватывающем турнире.'
    }
]

function FeaturesSection() {
    const { lang } = useLang();
    return (
        <section id="features" className="features">
            <div className="container">
                <ul className="features__grid">
                    {features.map((f) => (
                        <li key={f.title} className="features__item">
                            <h3>{lang === 'ru' ? f.titleRu : f.titleEn}</h3>
                            <p>{lang === 'ru' ? f.descriptionRu : f.descriptionEn}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FeaturesSection 