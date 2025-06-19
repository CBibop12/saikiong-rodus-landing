export const heroes = Array.from({ length: 52 }).map((_, i) => {
    const id = i + 1
    return {
        id,
        name: `Hero ${id}`,
        role: ['Knight', 'Mage', 'Ranger', 'Tank', 'Necromancer', 'Mecha', 'Mercenary', 'Other'][
            id % 8
        ],
        description_ru: `Краткое описание героя №${id}. Сильные и слабые стороны героя.`,
        description_en: `A short overview of hero #${id}, highlighting their strengths and weaknesses in battle.`,
        img: `https://source.unsplash.com/collection/895539/${300 + id}x${400 + id}`
    }
}) 