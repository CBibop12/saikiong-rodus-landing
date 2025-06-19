import { useState } from 'react'
import '../styles/CharactersCarousel.scss'
import { characters as heroes } from '../assets/data.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const typeColors = {
    'Рыцарь': "#1f1f1f",
    'Маг': "#214052",
    'Некромант': "#312152",
    'Стрелок': "#263d1c",
    'Танк': "#423021",
    'Меха': "#0e1929",
    'Наёмник': "#4f5201",
    'Иной': "#3d1111",
};

function CharactersCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('name')
    const [filterType, setFilterType] = useState('all')
    const { lang } = useLang()

    const selectedHero = heroes[selectedIndex]

    const getHeroType = (hero) => {
        switch (hero.type) {
            case 'Наёмник':
                return lang === 'ru' ? 'Наёмник' : 'Mercenary'
            case 'Маг':
                return lang === 'ru' ? 'Маг' : 'Mage'
            case 'Рыцарь':
                return lang === 'ru' ? 'Рыцарь' : 'Knight'
            case 'Стрелок':
                return lang === 'ru' ? 'Стрелок' : 'Ranger'
            case 'Некромант':
                return lang === 'ru' ? 'Некромант' : 'Necromancer'
            case 'Танк':
                return lang === 'ru' ? 'Танк' : 'Tank'
            case 'Меха':
                return lang === 'ru' ? 'Меха' : 'Mecha'
            default:
                return lang === 'ru' ? 'Иной' : 'Other'
        }
    }

    // Фильтрация и сортировка героев
    const filteredAndSortedHeroes = heroes
        .filter(hero => {
            // Фильтр по поиску
            const matchesSearch = hero.nameRu.toLowerCase().includes(searchTerm.toLowerCase()) || hero.nameEn.toLowerCase().includes(searchTerm.toLowerCase())

            // Фильтр по типу
            const matchesType = filterType === 'all' || hero.type === filterType

            return matchesSearch && matchesType
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return lang === 'ru' ? a.nameRu.localeCompare(b.nameRu) : a.nameEn.localeCompare(b.nameEn)
                case 'type':
                    return a.type.localeCompare(b.type)
                case 'hp':
                    return b.stats.HP - a.stats.HP
                case 'damage':
                    return b.stats.Урон - a.stats.Урон
                case 'mana':
                    return b.stats.Мана - a.stats.Мана
                case 'agility':
                    return b.stats.Ловкость - a.stats.Ловкость
                case 'armor':
                    return b.stats.Броня - a.stats.Броня
                case 'range':
                    return b.stats.Дальность - a.stats.Дальность
                default:
                    return 0
            }
        })
        .slice(0, 50) // Показываем только первые 50

    // Обновляем выбранного героя при изменении фильтров
    const handleHeroSelect = (hero) => {
        const originalIndex = heroes.findIndex(h => h.nameRu === hero.nameRu || h.nameEn === hero.nameEn)
        setSelectedIndex(originalIndex)
    }

    const uniqueTypes = [...new Set(heroes.map(hero => hero.type))]

    return (
        <section id="heroes" className="characters">
            <div className="container characters__wrapper">
                <h2 className="characters__heading">{lang === 'ru' ? 'Встречайте героев' : 'Meet the Heroes'}</h2>

                {/* Выбранный персонаж */}
                <div className="characters__selected">
                    <div className="characters__selected-image">
                        <img src={`src/assets/characters/${selectedHero.image || 'logo.svg'}`} alt={lang === 'ru' ? selectedHero.nameRu : selectedHero.nameEn} />
                    </div>
                    <div className="characters__selected-info">
                        <h3 className="characters__selected-name">{lang === 'ru' ? selectedHero.nameRu : selectedHero.nameEn}</h3>
                        <p className="characters__selected-role">{getHeroType(selectedHero)}</p>

                        <div className="characters__stats">
                            <h4>{lang === 'ru' ? 'Характеристики' : 'Stats'}</h4>
                            <div className="characters__stats-grid">
                                <div className="stat">
                                    <span className="stat-label">HP:</span>
                                    <span className="stat-value">{selectedHero.stats.HP}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">{lang === 'ru' ? 'Урон' : 'Damage'}:</span>
                                    <span className="stat-value">{selectedHero.stats.Урон}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">{lang === 'ru' ? 'Мана' : 'Mana'}:</span>
                                    <span className="stat-value">{selectedHero.stats.Мана}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">{lang === 'ru' ? 'Ловкость' : 'Agility'}:</span>
                                    <span className="stat-value">{selectedHero.stats.Ловкость}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">{lang === 'ru' ? 'Броня' : 'Armor'}:</span>
                                    <span className="stat-value">{selectedHero.stats.Броня}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-label">{lang === 'ru' ? 'Дальность' : 'Range'}:</span>
                                    <span className="stat-value">{selectedHero.stats.Дальность}</span>
                                </div>
                            </div>
                        </div>

                        <div className="characters__abilities">
                            <h4>{lang === 'ru' ? 'Способности' : 'Abilities'}:</h4>
                            {selectedHero.abilities && selectedHero.abilities.length > 0 ? (
                                selectedHero.abilities.slice(0, selectedHero.abilities.length).map((ability, index) => (
                                    <div key={ability.key || index} className="ability">
                                        <h5>{ability.key ? ability.key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : `${lang === 'ru' ? 'Способность' : 'Ability'} ${index + 1}`}</h5>
                                        <p>{lang === 'ru' ? ability.descriptionRu : ability.descriptionEn || (lang === 'ru' ? 'Описание способности недоступно.' : 'Ability description not available.')}</p>
                                        {ability.coolDown && (
                                            <span className="ability-cooldown">
                                                {lang === 'ru' ? 'Перезарядка' : 'Cooldown'}: {ability.coolDown} {lang === 'ru' ? 'ходов' : 'turns'}
                                            </span>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="ability">
                                    <h5>{lang === 'ru' ? 'Основная способность' : 'Main Ability'}</h5>
                                    <p>{lang === 'ru' ? 'Мощная атака, наносящая урон всем врагам в радиусе действия.' : 'Powerful attack that deals damage to all enemies within range.'}</p>
                                </div>
                            )}
                        </div>

                        <div className="characters__description">
                            <h4>{lang === 'ru' ? 'Описание' : 'Description'}:</h4>
                            <p>
                                {selectedHero.description_ru && selectedHero.description_en
                                    ? (lang === 'ru' ? selectedHero.description_ru : selectedHero.description_en)
                                    : (lang === 'ru'
                                        ? `${selectedHero.nameRu} - могущественный ${getHeroType(selectedHero).toLowerCase()}, обладающий уникальными способностями и высокими боевыми характеристиками.`
                                        : `${selectedHero.nameEn} is a powerful ${getHeroType(selectedHero).toLowerCase()} with unique abilities and high combat stats.`
                                    )
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Фильтры и сортировка */}
                <div className="characters__controls">
                    <div className="characters__search">
                        <input
                            type="text"
                            placeholder={lang === 'ru' ? 'Поиск героев...' : 'Search heroes...'}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="characters__search-input"
                        />
                    </div>

                    <div className="characters__filters">
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="characters__filter-select"
                        >
                            <option value="all">{lang === 'ru' ? 'Все типы' : 'All Types'}</option>
                            {uniqueTypes.map(type => (
                                <option key={type} value={type}>
                                    {getHeroType({ type })}
                                </option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="characters__sort-select"
                        >
                            <option value="name">{lang === 'ru' ? 'По имени' : 'By Name'}</option>
                            <option value="type">{lang === 'ru' ? 'По типу' : 'By Type'}</option>
                            <option value="hp">{lang === 'ru' ? 'По HP' : 'By HP'}</option>
                            <option value="damage">{lang === 'ru' ? 'По урону' : 'By Damage'}</option>
                            <option value="mana">{lang === 'ru' ? 'По мане' : 'By Mana'}</option>
                            <option value="agility">{lang === 'ru' ? 'По ловкости' : 'By Agility'}</option>
                            <option value="armor">{lang === 'ru' ? 'По броне' : 'By Armor'}</option>
                            <option value="range">{lang === 'ru' ? 'По дальности' : 'By Range'}</option>
                        </select>
                    </div>
                </div>

                {/* Сетка персонажей */}
                <div className="characters__grid">
                    {filteredAndSortedHeroes.map((hero) => (
                        <div
                            key={hero.nameRu || hero.nameEn}
                            className={`characters__grid-item ${hero.nameRu === selectedHero.nameRu || hero.nameEn === selectedHero.nameEn ? 'characters__grid-item--active' : ''}`}
                            onClick={() => handleHeroSelect(hero)}
                            style={{ backgroundColor: typeColors[hero.type] || typeColors['Иной'] }}
                        >
                            <img src={`src/assets/characters/${hero.image || 'logo.svg'}`} alt={lang === 'ru' ? hero.nameRu : hero.nameEn} />
                            <div className="characters__grid-overlay">
                                <span className="characters__grid-name">{lang === 'ru' ? hero.nameRu : hero.nameEn}</span>
                                <span className="characters__grid-role">{getHeroType(hero)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredAndSortedHeroes.length === 0 && (
                    <div className="characters__no-results">
                        <p>{lang === 'ru' ? 'Героев не найдено' : 'No heroes found'}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default CharactersCarousel 