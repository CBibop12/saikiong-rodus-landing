export const items = Array.from({ length: 40 }).map((_, i) => {
    const id = i + 1
    return {
        id,
        name: `Item ${id}`,
        description_ru: `Описание предмета №${id}. Уникальные свойства и бонусы.`,
        description_en: `Description for item #${id}. Unique stats and bonuses it provides.`,
        icon: `https://source.unsplash.com/collection/1163637/${100 + id}x${100 + id}`
    }
}) 