import { useState } from 'react'
import { items } from '../assets/data.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import '../styles/ItemsSection.scss'

const shopTypeColors = {
    'Магический': "#1a0d33",
    'Лаборатория': "#2d1b69",
    'Оружейная': "#4a4a4a",
};

function ItemsSection() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('name')
    const [filterShopType, setFilterShopType] = useState('all')
    const { lang } = useLang()

    const selectedItem = items[selectedIndex]

    const getShopType = (item) => {
        switch (item.shopType) {
            case 'Магический':
                return lang === 'ru' ? 'Магический' : 'Magic'
            case 'Лаборатория':
                return lang === 'ru' ? 'Лаборатория' : 'Laboratory'
            case 'Оружейная':
                return lang === 'ru' ? 'Оружейная' : 'Armory'
            default:
                return lang === 'ru' ? 'Другое' : 'Other'
        }
    }

    // Фильтрация и сортировка предметов
    const filteredAndSortedItems = items
        .filter(item => {
            // Фильтр по поиску
            const matchesSearch = (item.nameRu && item.nameRu.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.nameEn && item.nameEn.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))

            // Фильтр по типу магазина
            const matchesShopType = filterShopType === 'all' || item.shopType === filterShopType

            return matchesSearch && matchesShopType
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'name': {
                    const nameA = lang === 'ru' ? (a.nameRu || a.name) : (a.nameEn || a.name)
                    const nameB = lang === 'ru' ? (b.nameRu || b.name) : (b.nameEn || b.name)
                    return nameA.localeCompare(nameB)
                }
                case 'shopType':
                    return a.shopType.localeCompare(b.shopType)
                case 'price':
                    return (b.price || 0) - (a.price || 0)
                default:
                    return 0
            }
        })
        .slice(0, 50) // Показываем только первые 50

    // Обновляем выбранный предмет при изменении фильтров
    const handleItemSelect = (item) => {
        const originalIndex = items.findIndex(i =>
            (i.nameRu && item.nameRu && i.nameRu === item.nameRu) ||
            (i.nameEn && item.nameEn && i.nameEn === item.nameEn) ||
            (i.name && item.name && i.name === item.name)
        )
        setSelectedIndex(originalIndex)
    }

    const uniqueShopTypes = [...new Set(items.map(item => item.shopType))]

    const getItemName = (item) => {
        if (lang === 'ru') {
            return item.nameRu || item.name
        } else {
            return item.nameEn || item.name
        }
    }

    const getItemDescription = (item, field) => {
        if (lang === 'ru' && item.descriptionRu && item.descriptionRu[field]) {
            return item.descriptionRu[field]
        } else if (item.descriptionEn && item.descriptionEn[field]) {
            return item.descriptionEn[field]
        } else if (item.description) {
            return item.description
        }
        return null
    }

    return (
        <section id="items" className="items">
            <div className="container items__wrapper">
                <h2 className="items__heading">{lang === 'ru' ? 'Магические предметы' : 'Magic Items'}</h2>

                {/* Выбранный предмет */}
                <div className="items__selected">
                    <div className="items__selected-image">
                        <img src={`/assets/items/${selectedItem.image}`} alt={getItemName(selectedItem)} />
                    </div>
                    <div className="items__selected-info">
                        <h3 className="items__selected-name">{getItemName(selectedItem)}</h3>
                        <p className="items__selected-shop">{getShopType(selectedItem)}</p>

                        {selectedItem.price && (
                            <div className="items__price">
                                <h4>{lang === 'ru' ? 'Цена' : 'Price'}</h4>
                                <p>{selectedItem.price} {selectedItem.currency === 'gold' ? (lang === 'ru' ? 'золота' : 'gold') :
                                    selectedItem.currency === 'mana' ? (lang === 'ru' ? 'маны' : 'mana') :
                                        selectedItem.currency === 'HP' ? 'HP' : selectedItem.currency}</p>
                            </div>
                        )}
                        {selectedItem.shopType === "Магический" && (
                            <>
                                {getItemDescription(selectedItem, 'passiveAbility') && (
                                    <div className="items__ability">
                                        <h4>{lang === 'ru' ? 'Пассивная способность' : 'Passive Ability'}</h4>
                                        <p>{getItemDescription(selectedItem, 'passiveAbility')}</p>
                                    </div>
                                )}

                                {getItemDescription(selectedItem, 'activeAbility') && (
                                    <div className="items__ability">
                                        <h4>{lang === 'ru' ? 'Активная способность' : 'Active Ability'}</h4>
                                        <p>{getItemDescription(selectedItem, 'activeAbility')}</p>
                                    </div>
                                )}

                                {getItemDescription(selectedItem, 'availability') && (
                                    <div className="items__availability">
                                        <h4>{lang === 'ru' ? 'Доступность' : 'Availability'}</h4>
                                        <p>{getItemDescription(selectedItem, 'availability')}</p>
                                    </div>
                                )}
                            </>
                        )}
                        {selectedItem.shopType !== "Магический" && (
                            <>
                                <div className="items__description">
                                    <h4>{lang === 'ru' ? 'Описание' : 'Description'}</h4>
                                    <p>{lang === 'ru' ? selectedItem.descriptionRu : selectedItem.descriptionEn}</p>
                                </div>
                            </>
                        )}

                        {selectedItem.throwable && (
                            <div className="items__special">
                                <p className="items__throwable">{lang === 'ru' ? '🎯 Бросаемый предмет' : '🎯 Throwable item'}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Фильтры и сортировка */}
                <div className="items__controls">
                    <div className="items__search">
                        <input
                            type="text"
                            placeholder={lang === 'ru' ? 'Поиск предметов...' : 'Search items...'}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="items__search-input"
                        />
                    </div>

                    <div className="items__filters">
                        <select
                            value={filterShopType}
                            onChange={(e) => setFilterShopType(e.target.value)}
                            className="items__filter-select"
                        >
                            <option value="all">{lang === 'ru' ? 'Все магазины' : 'All Shops'}</option>
                            {uniqueShopTypes.map(shopType => (
                                <option key={shopType} value={shopType}>
                                    {getShopType({ shopType })}
                                </option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="items__sort-select"
                        >
                            <option value="name">{lang === 'ru' ? 'По имени' : 'By Name'}</option>
                            <option value="shopType">{lang === 'ru' ? 'По магазину' : 'By Shop'}</option>
                            <option value="price">{lang === 'ru' ? 'По цене' : 'By Price'}</option>
                        </select>
                    </div>
                </div>

                {/* Сетка предметов */}
                <div className="items__grid">
                    {filteredAndSortedItems.map((item) => {
                        const isSelected = (item.nameRu && selectedItem.nameRu && item.nameRu === selectedItem.nameRu) ||
                            (item.nameEn && selectedItem.nameEn && item.nameEn === selectedItem.nameEn) ||
                            (item.name && selectedItem.name && item.name === selectedItem.name)

                        return (
                            <div
                                key={item.nameRu || item.nameEn || item.name}
                                className={`items__grid-item ${isSelected ? 'items__grid-item--active' : ''}`}
                                onClick={() => handleItemSelect(item)}
                                style={{ backgroundColor: shopTypeColors[item.shopType] || shopTypeColors['Магический'] }}
                            >
                                <img src={`/assets/items/${item.image}`} alt={getItemName(item)} />
                                <div className="items__grid-overlay">
                                    <span className="items__grid-name">{getItemName(item)}</span>
                                    <span className="items__grid-shop">{getShopType(item)}</span>
                                    {item.price && (
                                        <span className="items__grid-price">
                                            {item.price} {item.currency === 'gold' ? '🪙' : item.currency === 'mana' ? '🔮' : '❤️'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {filteredAndSortedItems.length === 0 && (
                    <div className="items__no-results">
                        <p>{lang === 'ru' ? 'Предметов не найдено' : 'No items found'}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ItemsSection 