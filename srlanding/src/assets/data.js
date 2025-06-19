export const characters = [
  // ──────────────── Саламандра ────────────────
  {
    nameRu: "Саламандра",
    nameEn: "Salamander",
    type: "Иной",
    // image: "salamandra.jpg",
    image: "salamandra_alternative.png",
    stats: {
      HP: 300,
      Урон: 125,
      Мана: 3500,
      Ловкость: 8,
      Броня: 4,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 3500,
    currentDamage: 125,
    currentAgility: 8,
    currentArmor: 4,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "salamandra_fire_shots",
        image: "salamandra1.png",
        descriptionRu:
          "В радиусе 5 клеток от себя может выпустить 4 огненных выстрела, каждый из которых наносит по 50 урона.",
        descriptionEn:
          "Can shoot 4 fire shots in a range of 5 cells from itself, each dealing 50 damage.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "salamandra_transformation",
        image: "salamandra2.png",
        descriptionRu:
          "На 3 хода может превратиться в настоящую саламандру. В этой форме его ловкость +2, урон = 0, а также появляется шанс уворота 50%.",
        descriptionEn:
          "Can transform into a real salamander for 3 turns. In this form, its agility +2, damage = 0, and there is a 50% chance to dodge.",
        coolDown: 9,
        currentCooldown: 0,
      },
      {
        key: "salamandra_hot_ground",
        image: "salamandra3.png",
        descriptionRu:
          "Нагревает область с радиусом 1 вокруг себя на 3 хода. Каждый, кто войдёт в неё, получит урон 50.",
        descriptionEn:
          "Heats the area with a radius of 1 around itself for 3 turns. Each who enters it will receive 50 damage.",
        coolDown: 8,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Юань-ти ────────────────
  {
    nameRu: "Юань-ти",
    nameEn: "Yuan-ti",
    type: "Иной",
    // image: "yuanTi.jpg",
    image: "yuanTi_alternative.png",
    stats: {
      HP: 300,
      Урон: 175,
      Мана: 2000,
      Ловкость: 7,
      Броня: 1,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 2000,
    currentDamage: 175,
    currentAgility: 7,
    currentArmor: 1,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],

    abilities: [
      {
        key: "yuanti_binding",
        image: "yuanTi1.png",
        descriptionRu: "Окутывает противника (стан) на 2 хода.",
        descriptionEn: "Wraps the opponent (stuned) for 2 turns.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "yuanti_snake_bite",
        image: "yuanTi2.png",
        descriptionRu: "Отравляет противника на 2 хода, по 50 урона за ход.",
        descriptionEn: "Poisons the opponent for 2 turns, dealing 50 damage per turn.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "yuanti_cobra_dash",
        image: "yuanTi3.png",
        descriptionRu: "Ускоряет себя на +3 ловкости на 2 хода.",
        descriptionEn: "Accelerates itself by +3 agility for 2 turns.",
        coolDown: 7,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Вендиго ────────────────
  {
    nameRu: "Вендиго",
    nameEn: "Wendigo",
    type: "Иной",
    image: "vendigo_alternative.png",
    stats: {
      HP: 300,
      Урон: 160,
      Мана: 2500,
      Ловкость: 9,
      Броня: 3,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 2500,
    currentDamage: 160,
    currentAgility: 9,
    currentArmor: 3,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],

    abilities: [
      {
        key: "wendigo_pull",
        image: "vendigo1.png",
        descriptionRu:
          "Притягивает врага (до 6 клеток) к себе. Противник не может двигаться, но может действовать следующие 4 хода.",
        descriptionEn:
          "Pulls the opponent (up to 6 cells) to itself. The opponent cannot move, but can act for the next 4 turns.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "wendigo_possession",
        image: "vendigo2.png",
        descriptionRu:
          "Если HP противника ≤25%, Вендиго может вселиться в него на 4 хода, контролируя его.",
        descriptionEn:
          "If the opponent's HP ≤25%, Wendigo can possess him for 4 turns, controlling him.",
        coolDown: 12,
        currentCooldown: 0,
      },
      {
        key: "wendigo_vampirism",
        image: "vendigo3.png",
        descriptionRu:
          "На 4 хода удары Вендиго наносят 50 урона, но при этом восстанавливают ему 50 HP.",
        descriptionEn:
          "For 4 turns, Wendigo's attacks deal 50 damage, but also restore 50 HP to him.",
        coolDown: 6,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Повар ────────────────
  {
    nameRu: "Повар",
    nameEn: "Cook",
    type: "Иной",
    image: "orcPovar_alternative.png",
    stats: {
      HP: 450,
      Урон: 125,
      Мана: 3000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 450,
    currentMana: 3000,
    currentDamage: 125,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],

    abilities: [
      {
        key: "cook_poisoning",
        image: "orcPovar1.png",
        descriptionRu:
          "Наносит 50 магического урона. На следующий ход весь урон по цели удваивается.",
        descriptionEn:
          "Deals 50 magic damage. The next turn, the damage to the target is doubled.",
        coolDown: 6,
        currentCooldown: 0,
      },
      {
        key: "cook_caldron",
        image: "orcPovar2.png",
        descriptionRu:
          "Ставит Казан (выключен) с 200 HP и 2 Броней на 4 хода. Радиус 5 клеток.",
        descriptionEn:
          "Places the Caldron (disabled) with 200 HP and 2 Armor for 4 turns. The radius is 5 cells.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "cook_random_effect",
        image: "orcPovar3.png",
        descriptionRu:
          "При включенном Казане накладывает случайный положительный эффект на цель (мана +500, или ловкость +2, или броня +1).",
        descriptionEn:
          "When the Caldron is enabled, it applies a random positive effect to the target (mana +500, or agility +2, or armor +1).",
        coolDown: 2,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Скелет ────────────────
  {
    nameRu: "Скелет",
    nameEn: "Skeleton",
    type: "Иной",
    image: "skelet_alternative.png",
    stats: {
      HP: 300,
      Урон: 150,
      Мана: 4000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 4000,
    currentDamage: 150,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],

    abilities: [
      {
        key: "skeleton_scare",
        image: "skelet1.png",
        descriptionRu:
          "Отпугивает противников в радиусе 3 клеток. Те вынуждены отступить и не могут заходить обратно 3 хода.",
        descriptionEn:
          "Scares the opponents in a range of 3 cells. They have to retreat and cannot return back for 3 turns.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "skeleton_shield",
        image: "skelet2.png",
        descriptionRu:
          "Ставит щит (300 HP). Если щит не сломают, он исчезнет через 7 ходов.",
        descriptionEn:
          "Places a shield (300 HP). If the shield is not broken, it will disappear through 7 turns.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "skeleton_bow_shot",
        image: "skelet3.png",
        descriptionRu:
          "Выстрел из лука на дальность 6 клеток с уроном 150. Нельзя использовать вместе со щитом.",
        descriptionEn:
          "Bow shot at a range of 6 cells with 150 damage. Cannot be used together with a shield.",
        coolDown: 1,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Гоблин ────────────────
  {
    nameRu: "Гоблин",
    nameEn: "Goblin",
    type: "Иной",
    image: "goblin_alternative.png",
    stats: {
      HP: 275,
      Урон: 125,
      Мана: 2500,
      Ловкость: 7,
      Броня: 1,
      Дальность: 2,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 275,
    currentMana: 2500,
    currentDamage: 125,
    currentAgility: 7,
    currentArmor: 1,
    currentRange: 2,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],

    abilities: [
      {
        key: "goblin_ranged_shot",
        descriptionRu: "Стреляет на 6 клеток с уроном 150.",
        descriptionEn: "Shoots at a range of 6 cells with 150 damage.",
        image: "goblin1.png",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "goblin_regeneration",
        descriptionRu: "Регенерация по 50 HP за ход, длится 3 хода.",
        descriptionEn: "Regenerates 50 HP per turn, lasts 3 turns.",
        image: "goblin2.png",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "goblin_sniper_mode",
        descriptionRu:
          "Переходит в режим стрелка (5 зарядов). Каждый выстрел на 7 клеток и бьёт по 125 технического урона.",
        descriptionEn:
          "Transitions to sniper mode (5 charges). Each shot at a range of 7 cells deals 125 technical damage.",
        image: "goblin3.png",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Кобольд ────────────────
  {
    nameRu: "Кобольд",
    nameEn: "Kobold",
    type: "Иной",
    image: "kobold_alternative.png",
    stats: {
      HP: 300,
      Урон: 125,
      Мана: 2000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 2000,
    currentDamage: 125,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "kobold_digging",
        descriptionRu:
          "Пассивно: зарывшись под землю, может копать туннели обычным действием.",
        descriptionEn:
          "Passively: by burrowing into the ground, it can dig tunnels with a normal action.",
        image: "kobold1.png",
        coolDown: 0,
        currentCooldown: 0,
      },
      {
        key: "kobold_explosion",
        descriptionRu:
          "Подрывает область 4x2 с уроном 200. Если под землёй, эффект усиливается.",
        descriptionEn:
          "Detonates an area of 4x2 with 200 damage. If underground, the effect is enhanced.",
        image: "kobold2.png",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "kobold_ladder",
        descriptionRu:
          "Ставит лестницу (HP 300). Можно залезать/слезать за действие/перемещение.",
        descriptionEn:
          "Places a ladder (300 HP). You can climb/slide in/out with an action/movement.",
        image: "kobold3.png",
        coolDown: 8,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Подсолнух ────────────────
  {
    nameRu: "Подсолнух",
    nameEn: "Sunflower",
    type: "Иной",
    image: "podsolnuh_alternative.png",
    stats: {
      HP: 200,
      Урон: 150,
      Мана: 2500,
      Ловкость: 5,
      Броня: 4,
      Дальность: 3,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 200,
    currentMana: 2500,
    currentDamage: 150,
    currentAgility: 5,
    currentArmor: 4,
    currentRange: 3,
    position: null,
    inventory: [],
    inventoryLimit: 1,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "podsolnuh_bind",
        descriptionRu:
          "Окутывает противника на дальности 6 на 2 хода, нанося 100 урона в первый ход.",
        descriptionEn:
          "Wraps the opponent on a range of 6 for 2 turns, dealing 100 damage in the first turn.",
        image: "podsolnuh1.png",
        coolDown: 12,
        currentCooldown: 0,
      },
      {
        key: "podsolnuh_teleport",
        image: "podsolnuh2.png",
        descriptionRu:
          "Цветик может переместиться в любую точку на своей половине карты.",
        descriptionEn:
          "The sunflower can teleport to any point on its half of the map.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "podsolnuh_absorb",
        image: "podsolnuh3.png",
        descriptionRu:
          "Поглощает любой тех. и маг. урон в течение 3 ходов.",
        descriptionEn:
          "Absorbs any technical and magic damage for 3 turns.",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Слизень ────────────────
  {
    nameRu: "Слизень",
    nameEn: "Slime",
    type: "Иной",
    image: "slizen_alternative.png",
    stats: {
      HP: 400,
      Урон: 150,
      Мана: 2500,
      Ловкость: 6,
      Броня: 1,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 400,
    currentMana: 2500,
    currentDamage: 150,
    currentAgility: 6,
    currentArmor: 1,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "slizen_acid_area",
        image: "slizen1.png",
        descriptionRu:
          "В радиусе 3 вокруг себя создаёт кислотную область, наносящую 125 магического урона.",
        descriptionEn:
          "Creates an acidic area around itself with a range of 3, dealing 125 magic damage.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "slizen_absorb_half",
        image: "slizen2.png",
        descriptionRu:
          "Поглощает 50% входящего урона в течение 5 ходов.",
        descriptionEn:
          "Absorbs 50% incoming damage for 5 turns.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "slizen_passive_wall",
        image: "slizen3.png",
        descriptionRu:
          "Пассивно может проходить сквозь стены. Если останется в стене, его вытолкнет на ближайшую клетку.",
        descriptionEn:
          "Passively can pass through walls. If it remains in the wall, it will be pushed to the nearest cell.",
        // Пассивная способность — coolDown: 0, или не указываем вовсе
        coolDown: 0,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Подрывница ────────────────
  {
    nameRu: "Подрывница",
    nameEn: "Bomb Girl",
    type: "Иной",
    image: "podrivnicsa_alternative.png",
    stats: {
      HP: 400,
      Урон: 150,
      Мана: 2000,
      Ловкость: 6,
      Броня: 2,
      Дальность: 3,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 400,
    currentMana: 2000,
    currentDamage: 150,
    currentAgility: 6,
    currentArmor: 2,
    currentRange: 3,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "bombgirl_flying_stun",
        image: "podrivnica1.png",
        descriptionRu:
          "Пролетает 8 клеток вперёд, оглушая тех, кто задет на 1 ход (луч шириной 3 клетки).",
        descriptionEn:
          "Flies 8 cells forward, stunning those who are hit for 1 turn (a beam 3 cells wide).",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "bombgirl_bomb",
        image: "podrivnica2.png",
        descriptionRu:
          "На дальности 4 прилепляет бомбу с таймером 3 хода. Взрыв наносит 200 урона носителю.",
        descriptionEn:
          "On a range of 4, it attaches a bomb with a timer of 3 turns. The explosion deals 200 damage to the carrier.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "bombgirl_molotov",
        image: "podrivnica3.png",
        descriptionRu:
          "На дальности 3 создаёт огненную зону радиусом 3 клеток на 3 хода, нанося 75 урона/ход.",
        descriptionEn:
          "Creates a fire area with a radius of 3 cells for 3 turns, dealing 75 damage per turn.",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Амудсиас ────────────────
  {
    nameRu: "Амудсиас",
    nameEn: "Amudsias",
    type: "Иной",
    image: "amudsias_alternative.png",
    stats: {
      HP: 250,
      Урон: 75,
      Мана: 5000,
      Ловкость: 5,
      Броня: 2, // в описании не было Брони, можно указать 0 или удалить
      Дальность: 2,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 250,
    currentMana: 5000,
    currentDamage: 75,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 2,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    features:
      "Может проходить сквозь персонажей. Не может покупать броню и подбирать предметы.",
    abilities: [
      {
        key: "amudsius_possession",
        image: "amudsias1.png",
        descriptionRu:
          "Вселяется в персонажа на 10 ходов, складывая его HP, урон, броню и ману со своими.",
        descriptionEn:
          "Possesses a character for 10 turns, adding their HP, damage, armor, and mana to its own.",
        coolDown: 13,
        currentCooldown: 0,
      },
      {
        key: "amudsius_scare",
        image: "amudsias2.png",
        descriptionRu:
          'Отпугивает противников в радиусе 5 клеток (аналогично другим "страхам").',
        descriptionEn:
          "Scares opponents in a range of 5 cells (similar to other fears).",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "amudsius_shot",
        image: "amudsias3.png",
        descriptionRu:
          "Тратит 750 маны и наносит 75 урона по цели на дальности 5, игнорируя броню. Не сбрасывает остальные перезарядки.",
        descriptionEn:
          "Spends 750 mana and deals 75 damage to the target at a range of 5, ignoring armor. Does not reset other cooldowns.",
        coolDown: 0, // или особая логика без перезарядки
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Заклинатель рун ────────────────
  {
    nameRu: "Заклинатель рун",
    nameEn: "Rune Caster",
    type: "Иной",
    image: "zaklinatelRun_alternative.png",
    stats: {
      HP: 250,
      Урон: 125,
      Мана: 2000,
      Ловкость: 5,
      Броня: 4,
      Дальность: 1,
    },
    passiveAbilities: [],
    features:
      "Его способности вставляют 3 руны разного типа в соответственные ячейки. Все способности Заклинателя рун перезагружаются с начала игры.",
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 250,
    currentMana: 2000,
    currentDamage: 125,
    currentAgility: 5,
    currentArmor: 4,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "runecaster_hp_rune",
        image: "runecaster1.png",
        descriptionRu: "Руна НР. Добавляет 75 НР.",
        descriptionEn: "HP rune. Adds 75 HP.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "runecaster_damage_rune",
        image: "runecaster2.png",
        descriptionRu: "Руна урона. Добавляет 25 урона.",
        descriptionEn: "Damage rune. Adds 25 damage.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "runecaster_mana_rune",
        image: "runecaster3.png",
        descriptionRu: "Руна маны. Добавляет 1000 маны.",
        descriptionEn: "Mana rune. Adds 1000 mana.",
        coolDown: 5,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Ночной охотник ────────────────
  {
    nameRu: "Ночной охотник",
    nameEn: "Night Hunter",
    type: "Иной",
    image: "nochnoi_ohotnik_alternative.png",
    stats: {
      HP: 300,
      Урон: 175,
      Мана: 3000,
      Ловкость: 6,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 3000,
    currentDamage: 175,
    currentAgility: 6,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "night_hunter_bat_beam",
        image: "nochnoi1.png",
        descriptionRu:
          "Выпускает луч летучих мышей (урон 150 на 8 клеток, пробивает стены).",
        descriptionEn:
          "Releases a bat beam (150 damage over 8 cells, penetrates walls).",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "night_hunter_silence_area",
        image: "nochnoi2.png",
        descriptionRu:
          "В радиусе 3 клетки вокруг охотника персонажи не могут использовать способности 3 хода.",
        descriptionEn:
          "In the area of 3 cells around the hunter, characters cannot use abilities for 3 turns.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "night_hunter_vampire_strike",
        image: "nochnoi3.png",
        descriptionRu:
          "На 5 ходов при ударе восстанавливает себе 100 HP, добив врага — +100 к макс. HP.",
        descriptionEn:
          "For 5 turns, when hitting an enemy, it restores 100 HP to itself, and if the enemy is killed, it adds +100 to the maximum HP.",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Дейви Джонс ────────────────
  {
    nameRu: "Дейви Джонс",
    nameEn: "Devy Jones",
    type: "Рыцарь",
    image: "deivy_jons_alternative.png",
    stats: {
      HP: 250,
      Урон: 150,
      Мана: 3000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      immortal: false, // включается при создании сундука
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 250,
    currentMana: 3000,
    currentDamage: 150,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "davyjones_teleport",
        image: "davvy1.png",
        descriptionRu:
          "Телепорт к выбранному врагу в радиусе 6 клеток.",
        descriptionEn:
          "Teleports to the selected enemy in a range of 6 cells.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "davyjones_strangle",
        image: "davvy2.png",
        descriptionRu:
          "На 2 хода душит противника (50 урона/ход), отключая перемещение/действие.",
        descriptionEn:
          "Strangles an opponent for 2 turns (50 damage per turn, disables movement/action).",
        coolDown: 6,
        currentCooldown: 0,
      },
      {
        key: "davyjones_chest",
        image: "davvy3.png",
        descriptionRu:
          "Сундук с сердцем (1 HP, 3 брони). Пока сундук цел, Дейви бессмертен. Если сундук разрушат, он погибает.",
        descriptionEn:
          "Chest with a heart (1 HP, 3 armor). While the chest is intact, Devy is immortal. If the chest is destroyed, he dies.",
        coolDown: 15, // перезагружается с начала партии
        currentCooldown: 15,
      },
    ],
  },

  // ──────────────── Варвар ────────────────
  {
    nameRu: "Варвар",
    nameEn: "Barbarian",
    type: "Рыцарь",
    image: "barbarian_alternative.png",
    stats: {
      HP: 450,
      Урон: 150,
      Мана: 2000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    features:
      'Может накапливать "Ярость Варвара", атакуя противника (макс.3). При 3 зарядах - урон x1.5.',
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      rageStacks: 0, // здесь будет копиться "Ярость"
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 450,
    currentMana: 2000,
    currentDamage: 150,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "barbarian_axe_throw",
        image: "barbarian1.png",
        descriptionRu:
          "Метает топор на 5 клеток (175 урона, 10% промах).",
        descriptionEn:
          "Throws an axe at 5 cells (175 damage, 10% miss chance).",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "barbarian_ally_pull",
        image: "barbarian2.png",
        descriptionRu:
          "Перемещает союзника к себе с любой точки карты.",
        descriptionEn:
          "Moves an ally to itself from any point on the map.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "barbarian_rage_strike",
        image: "barbarian3.png",
        descriptionRu:
          "Пассивно: при накоплении 3 ярости — удар x1.5 урон.",
        descriptionEn:
          "Passively: when accumulating 3 rage — strike x1.5 damage.",
        coolDown: 0, // пассивка
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Плут ────────────────
  {
    nameRu: "Плут",
    nameEn: "Rogue",
    type: "Рыцарь",
    image: "plut_alternative.png",
    stats: {
      HP: 300,
      Урон: 125,
      Мана: 2500,
      Ловкость: 7,
      Броня: 2,
      Дальность: 1,
    },
    features:
      "хотя изначально 2500 маны, лимит = 6000 маны. Пассивно: Может получать ману из вражеского храма. 10% уворот.",
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 10, // 10% обычный уворот
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 2500,
    currentDamage: 125,
    currentAgility: 7,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "plut_double_agility",
        image: "plut1.png",
        descriptionRu: "На 2 хода удваивает свою ловкость.",
        descriptionEn: "For 2 turns, doubles its agility.",
        coolDown: 6,
        currentCooldown: 0,
      },
      {
        key: "plut_climb_wall",
        image: "plut2.png",
        descriptionRu: "Залезает на стену. Спуск = перемещение.",
        descriptionEn: "Climbs the wall. Descending = movement.",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "plut_steal_item",
        image: "plut3.png",
        descriptionRu:
          "Крадёт предмет у врага за 1/2 стоимости. Не сбрасывает другие перезарядки.",
        descriptionEn:
          "Steals an item from an enemy for half its cost. Does not reset other cooldowns.",
        coolDown: 0,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Зелос ────────────────
  {
    nameRu: "Зелос",
    nameEn: "Zelos",
    type: "Рыцарь",
    image: "zelos_alternative.png",
    stats: {
      HP: 400,
      Урон: 125,
      Мана: 3000,
      Ловкость: 7,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 400,
    currentMana: 3000,
    currentDamage: 125,
    currentAgility: 7,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "zelos_meteor",
        image: "zelos1.png",
        descriptionRu: "Кидает метеор на 10 клеток, 50 (маг.) урона.",
        descriptionEn: "Throws a meteor at 10 cells, 50 (magic) damage.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "zelos_absorb_magic",
        image: "zelos2.png",
        descriptionRu:
          "На 3 хода поглощает маг. урон, а физический урон конвертирует в ману x2.",
        descriptionEn:
          "For 3 turns, absorbs magic damage, and converts physical damage to mana x2.",
        coolDown: 6,
        currentCooldown: 0,
      },
      {
        key: "zelos_return_damage",
        image: "zelos3.png",
        descriptionRu:
          "В течение 5 ходов копит входящий урон, затем возвращает сквозь броню.",
        descriptionEn:
          "For 5 turns, accumulates incoming damage, then returns through armor.",
        coolDown: 6,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Легионер ────────────────
  {
    nameRu: "Легионер",
    nameEn: "Legionnaire",
    type: "Рыцарь",
    image: "legioner_alternative.png",
    stats: {
      HP: 350,
      Урон: 175,
      Мана: 2000,
      Ловкость: 6,
      Броня: 3,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      hitStreak: 0, // для пассивки
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 350,
    currentMana: 2000,
    currentDamage: 175,
    currentAgility: 6,
    currentArmor: 3,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "legionnaire_mana_strike",
        image: "legionnaire1.png",
        descriptionRu:
          "Бьёт по мане цели: чем меньше маны, тем больше урон (макс 175).",
        descriptionEn:
          "Hits the target with mana: the less mana, the more damage (max 175).",
        coolDown: 6,
        currentCooldown: 0,
      },
      {
        key: "legionnaire_line_formation",
        image: "legionnaire2.png",
        descriptionRu: "Создаёт линию (5х1) легионеров с общим HP 400.",
        descriptionEn:
          "Creates a line (5x1) legionnaires with a total HP of 400.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "legionnaire_agility_stack",
        image: "legionnaire3.png",
        descriptionRu:
          "Пассивно: каждый последовательный удар даёт +1 ловкости (макс 10). Если пропустить ход атаки – сброс.",
        descriptionEn:
          "Passively: each consecutive hit gives +1 agility (max 10). If you skip the attack turn – reset.",
        coolDown: 0,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Палладин ────────────────
  {
    nameRu: "Палладин",
    nameEn: "Paladin",
    type: "Рыцарь",
    image: "paladin_alternative.png",
    stats: {
      HP: 450,
      Урон: 150,
      Мана: 2000,
      Ловкость: 5,
      Броня: 3,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 450,
    currentMana: 2000,
    currentDamage: 150,
    currentAgility: 5,
    currentArmor: 3,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "paladin_divine_area",
        image: "paladin1.png",
        descriptionRu:
          "Наносит 150 (маг.) урона по области радиусом 5 вокруг себя.",
        descriptionEn:
          "Deals 150 (magic) damage to an area of 5 around itself.",
        coolDown: 9,
        currentCooldown: 0,
      },
      {
        key: "paladin_hammer_throw",
        image: "paladin2.png",
        descriptionRu: "На 6 клеток бросает молот, 125 урона.",
        descriptionEn: "Throws a hammer at 6 cells, 125 damage.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "paladin_holy_explosion",
        image: "paladin3.png",
        descriptionRu: "На 4 клетки вокруг себя наносит 200 (маг.) урона.",
        descriptionEn:
          "Deals 200 (magic) damage to an area of 4 around itself.",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Минотавр ────────────────
  {
    nameRu: "Минотавр",
    nameEn: "Minotaur",
    type: "Рыцарь",
    image: "minotaur_alternative.png",
    stats: {
      HP: 350,
      Урон: 175,
      Мана: 3000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 350,
    currentMana: 3000,
    currentDamage: 175,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "minotaur_charge_beam",
        image: "minotaur1.png",
        descriptionRu:
          "Луч на 4 клетки (200 урона), сдвигает врагов и перемещает Минотавра.",
        descriptionEn:
          "Beam on 4 cells (200 damage), pushes enemies and moves the Minotaur.",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "minotaur_hammer_legs",
        image: "minotaur2.png",
        descriptionRu: "2 хода по 75 урона/ход, -1/2 ловкости на период.",
        descriptionEn:
          "2 turns of 75 damage per turn, -1/2 agility for the period.",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "minotaur_aoe_strike",
        image: "minotaur3.png",
        descriptionRu: "Удар по радиусу 3 вокруг, 150 урона всем.",
        descriptionEn:
          "Strike on a radius of 3 around, 150 damage to all.",
        coolDown: 3,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Мститель ────────────────
  {
    nameRu: "Мститель",
    nameEn: "Avenger",
    type: "Рыцарь",
    image: "mstitel_alternative.png",
    stats: {
      HP: 300,
      Урон: 150,
      Мана: 2000,
      Ловкость: 7,
      Броня: 2,
      Дальность: 2,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 2000,
    currentDamage: 150,
    currentAgility: 7,
    currentArmor: 2,
    currentRange: 2,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "avenger_random_effect",
        image: "mstitel1.png",
        descriptionRu:
          "Случайный эффект (по врагу) – может нанести урон, снизить ловкость и т.д.",
        descriptionEn:
          "Random effect (to the enemy) – can deal damage, reduce agility, etc.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "avenger_punish_effect",
        image: "mstitel2.png",
        descriptionRu:
          "На 4 хода цель не может бить Мстителя, получает +50% входящего урона.",
        descriptionEn:
          "For 4 turns, the target cannot attack the Avenger, receives +50% incoming damage.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "avenger_remove_effects",
        image: "mstitel3.png",
        descriptionRu:
          "Снимает все эффекты, наложенные персонажем (или все?)",
        descriptionEn:
          "Removes all effects applied by the character (or all?)",
        coolDown: 7, // было упомянуто "7 ходов" в тексте
        currentCooldown: 0,
      }
    ],
  },

  // ──────────────── Крестоносец ────────────────
  {
    nameRu: "Крестоносец",
    nameEn: "Crusader",
    type: "Рыцарь",
    // image: "krestonosec.jpg",
    image: "crusader_alternative.png",
    stats: {
      HP: 500,
      Урон: 150,
      Мана: 3000,
      Ловкость: 4,
      Броня: 4,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 500,
    currentMana: 3000,
    currentDamage: 150,
    currentAgility: 4,
    currentArmor: 4,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "crusader_heal_allies",
        image: "crusader1.png",
        descriptionRu: "Восстанавливает 150 HP всем союзникам (и себе).",
        descriptionEn:
          "Heals 150 HP to all allies (and itself).",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "crusader_shield_ally",
        image: "crusader2.png",
        descriptionRu:
          "На 3 хода ставит щит (400 HP) на себя или союзника в 5 клетках.",
        descriptionEn:
          "Places a shield (400 HP) on itself or an ally in 5 cells for 3 turns.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "crusader_global_beam",
        image: "crusader3.png",
        descriptionRu: "Луч по всей карте, 150 урона всем на линии.",
        descriptionEn:
          "Beam across the map, 150 damage to all on the line.",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Воздушный монах ────────────────
  {
    nameRu: "Воздушный монах",
    nameEn: "Air Monk",
    type: "Маг",
    // image: "vozdushniyMonah.jpg",
    image: "monah_alternative.png",
    stats: {
      HP: 350,
      Урон: 150,
      Мана: 4000,
      Ловкость: 6,
      Броня: 1,
      Дальность: 4,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 350,
    currentMana: 4000,
    currentDamage: 150,
    currentAgility: 6,
    currentArmor: 1,
    currentRange: 4,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "wind_monk_wind_dome",
        image: "monah1.png",
        descriptionRu: "3 хода: +2 ловкости, купол (200 HP), не может атаковать.",
        descriptionEn:
          "3 turns: +2 agility, dome (200 HP), cannot attack.",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "wind_monk_hurricane",
        image: "monah2.png",
        descriptionRu:
          "Ураган (радиус 7), притягивает и наносит 25/ход, держится 2 хода.",
        descriptionEn:
          "Hurricane (radius 7), attracts and deals 25 damage per turn, lasts 2 turns.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "wind_monk_bloody_fog",
        image: "monah3.png",
        descriptionRu:
          "Кровавый туман (5 радиус, 5 ходов), 75/ход и -1/2 ловкости.",
        descriptionEn:
          "Bloody fog (5 radius, 5 turns), 75 damage per turn and -1/2 agility.",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Древний ────────────────
  {
    nameRu: "Древний",
    nameEn: "Ancient",
    type: "Маг",
    // image: "drevniy.jpg",
    image: "drevniy_alternative.png",
    stats: {
      HP: 350,
      Урон: 140,
      Мана: 5000,
      Ловкость: 5,
      Броня: 3,
      Дальность: 5,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 350,
    currentMana: 5000,
    currentDamage: 140,
    currentAgility: 5,
    currentArmor: 3,
    currentRange: 5,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "drevniy_wall_square",
        image: "drevniy1.png",
        descriptionRu: "Создаёт 3x3 неразрушимые стены на 7 ходов.",
        descriptionEn:
          "Creates 3x3 indestructible walls for 7 turns.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "drevniy_mud_wave",
        image: "drevniy2.png",
        descriptionRu: "Грязевая волна (5x3), 175 урона.",
        descriptionEn:
          "Mud wave (5x3), 175 damage.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "drevniy_remove_negative",
        image: "drevniy3.png",
        descriptionRu: "Снимает негативные эффекты + 5 ходов иммунитет к ним.",
        descriptionEn:
          "Removes negative effects + 5 turns immunity to them.",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Леприкон ────────────────
  {
    nameRu: "Леприкон",
    nameEn: "Leprechaun",
    type: "Маг",
    image: "lepricon_alternative.png",
    stats: {
      HP: 325,
      Урон: 110,
      Мана: 5000,
      Ловкость: 4,
      Броня: 3,
      Дальность: 4,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 325,
    currentMana: 5000,
    currentDamage: 110,
    currentAgility: 4,
    currentArmor: 3,
    currentRange: 4,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "leprechaun_area_4_150",
        image: "lepricon1.png",
        descriptionRu: "Область (4 радиус), 150 урона.",
        descriptionEn:
          "Area (4 radius), 150 damage.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "leprechaun_global_teleport",
        image: "lepricon2.png",
        descriptionRu: "Телепорт в любую точку карты.",
        descriptionEn:
          "Teleport to any point on the map.",
        coolDown: 12,
        currentCooldown: 0,
      },
      {
        key: "leprechaun_area_5_200",
        image: "lepricon3.png",
        descriptionRu: "Область (5 радиус), 200 урона.",
        descriptionEn:
          "Area (5 radius), 200 damage.",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Дракула ────────────────
  {
    nameRu: "Дракула",
    nameEn: "Dracula",
    type: "Маг",
    image: "dracula_alternative.png",
    stats: {
      HP: 375,
      Урон: 125,
      Мана: 4000,
      Ловкость: 6,
      Броня: 2,
      Дальность: 5,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0, // могли бы присвоить > 0, раз это Дракула
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 375,
    currentMana: 4000,
    currentDamage: 125,
    currentAgility: 6,
    currentArmor: 2,
    currentRange: 5,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "dracula_move_8",
        image: "dracula1.png",
        descriptionRu: "Перемещается в радиусе 8 клеток.",
        descriptionEn:
          "Moves in a range of 8 cells.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "dracula_drain_100",
        image: "dracula2.png",
        descriptionRu: "Вытягивает 100 HP (можно у врага или союзника).",
        descriptionEn:
          "Drains 100 HP (can be from an enemy or an ally).",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "dracula_area_3_75x2",
        image: "dracula3.png",
        descriptionRu: "Радиус 3 на 2 хода, наносит 75/ход.",
        descriptionEn:
          "Radius 3 for 2 turns, deals 75 damage per turn.",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Пламенный шаман ────────────────
  {
    nameRu: "Пламенный шаман",
    nameEn: "Flame Shaman",
    type: "Маг",
    image: "plamenniy_shaman_alternative.png",
    stats: {
      HP: 350,
      Урон: 140,
      Мана: 5000,
      Ловкость: 5,
      Броня: 1,
      Дальность: 5,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 350,
    currentMana: 5000,
    currentDamage: 140,
    currentAgility: 5,
    currentArmor: 1,
    currentRange: 5,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "flame_shaman_damage_boost_area",
        image: "shaman1.png",
        descriptionRu: "Область (радиус 4, 2 хода): союзники +100 к урону.",
        descriptionEn:
          "Area (radius 4, 2 turns): allies +100 to damage.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "flame_shaman_meteor",
        image: "shaman2.png",
        descriptionRu: "На 4 клетки, 250 урона (маг.).",
        descriptionEn:
          "On 4 cells, 250 damage (magic).",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "flame_shaman_phoenix",
        image: "shaman3.png",
        descriptionRu: "Призыв Феникса (10 ходов), бьёт 125/ход в радиусе 4.",
        descriptionEn:
          "Summon Phoenix (10 turns), deals 125 damage per turn in a range of 4.",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Пикси-целитель ────────────────
  {
    nameRu: "Пикси-целитель",
    nameEn: "Pixie",
    type: "Маг",
    image: "pixie_alternative.png",
    stats: {
      HP: 275,
      Урон: 125,
      Мана: 4500,
      Ловкость: 7,
      Броня: 2,
      Дальность: 3,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 275,
    currentMana: 4500,
    currentDamage: 125,
    currentAgility: 7,
    currentArmor: 2,
    currentRange: 3,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "pixie_agility_up",
        image: "pixie1.png",
        descriptionRu: "На 2 хода ловкость +2 Пикси.",
        descriptionEn:
          "For 2 turns, agility +2 Pixie.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "pixie_healing_on_hit",
        image: "pixie2.png",
        descriptionRu:
          "На 2 хода: при ударе противника Пикси лечит выбранного союзника.",
        descriptionEn:
          "For 2 turns: when an enemy is hit, Pixie heals the selected ally.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "pixie_area_regen",
        image: "pixie3.png",
        descriptionRu: "В радиусе 2 клетки восстанавливает 75 НР/ход (4 хода).",
        descriptionEn:
          "In a range of 2 cells, restores 75 HP per turn (4 turns).",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Кровавый маг ────────────────
  {
    nameRu: "Кровавый маг",
    nameEn: "Bloodmage",
    type: "Маг",
    image: "krovaviyMag_alternative.png",
    stats: {
      HP: 500,
      Урон: 125,
      Мана: 4000,
      Ловкость: 5,
      Броня: 5,
      Дальность: 3,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      healTimes: 0, // счётчик для возр. восстановления
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 500,
    currentMana: 4000,
    currentDamage: 125,
    currentAgility: 5,
    currentArmor: 5,
    currentRange: 3,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "bloodmage_maxhp10p",
        image: "blood1.png",
        descriptionRu: "Платит 100 НР, снимает 10% макс.HP у врага (радиус 3).",
        descriptionEn:
          "Pays 100 HP, removes 10% max.HP from an enemy (radius 3).",
        coolDown: 0,
        currentCooldown: 0,
      },
      {
        key: "bloodmage_dot1percent10",
        image: "blood2.png",
        descriptionRu: "Платит 50 НР, вешает дот на 10 ходов (1% HP/ход).",
        descriptionEn:
          "Pays 50 HP, applies a dot for 10 turns (1% HP per turn).",
        coolDown: 0,
        currentCooldown: 0,
      },
      {
        key: "bloodmage_heal_increasing",
        image: "blood3.png",
        descriptionRu:
          "Восстанавливает HP по возр. шкале: 5%→10%→20%→40%→80%. (перезарядка 6 ходов)",
        descriptionEn:
          "Heals HP in an increasing scale: 5%→10%→20%→40%→80%. (cooldown 6 turns)",
        coolDown: 6,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Бомбардировщик ────────────────
  {
    nameRu: "Бомбардировщик",
    nameEn: "Bomber",
    type: "Меха",
    image: "bomber_alternative.png",
    stats: {
      HP: 250,
      Урон: 100,
      Мана: 0,
      Ловкость: 5,
      Броня: 3,
      Дальность: 5,
    },
    features: "Урон от 2 и 3 способностей наносится только целям на земле.",
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      canFly: false,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 250,
    currentMana: 0,
    currentDamage: 100,
    currentAgility: 5,
    currentArmor: 3,
    currentRange: 5,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "bomber_fly8",
        image: "bomber1.png",
        descriptionRu: "Пролетает 8 клеток, после получает полёт на 10 ходов.",
        descriptionEn:
          "Flies 8 cells, then gets flight for 10 turns.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "bomber_drop_bomb",
        image: "bomber2.png",
        descriptionRu:
          "Сбрасывает бомбу (радиус 2, 150 урона) по целям на земле.",
        descriptionEn:
          "Drops a bomb (radius 2, 150 damage) to targets on the ground.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "bomber_line_damage",
        image: "bomber3.png",
        descriptionRu: "Пролет 5 клеток (ширина 3), урон 100 по земле.",
        descriptionEn:
          "Flies 5 cells (width 3), 100 damage to the ground.",
        coolDown: 5,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Риот ────────────────
  {
    nameRu: "Риот",
    nameEn: "Riot",
    type: "Стрелок",
    image: "riot_alternative.png",
    stats: {
      HP: 350,
      Урон: 150,
      Мана: 3000,
      Ловкость: 7,
      Броня: 2,
      Дальность: 4,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 350,
    currentMana: 3000,
    currentDamage: 150,
    currentAgility: 7,
    currentArmor: 2,
    currentRange: 4,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "riot_shot150",
        image: "riot1.png",
        descriptionRu: "Выстрел на 7 клеток, 150 урона.",
        descriptionEn:
          "Shot on 7 cells, 150 damage.",
        coolDown: 3,
        currentCooldown: 0,
      },
      {
        key: "riot_pull50",
        image: "riot2.png",
        descriptionRu: "Притягивает цель (8 клеток), наносит 50 урона.",
        descriptionEn:
          "Pulls a target (8 cells), deals 50 damage.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "riot_cross_explosion",
        image: "riot3.png",
        descriptionRu: "Крест 2х2 (150 урона). За добивание +50% золота.",
        descriptionEn:
          "Cross 2x2 (150 damage). For killing +50% gold.",
        coolDown: 6,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Мушкетёр ────────────────
  {
    nameRu: "Мушкетёр",
    nameEn: "Musketeer",
    type: "Стрелок",
    image: "musketer_alternative.png",
    stats: {
      HP: 200,
      Урон: 100,
      Мана: 2000,
      Ловкость: 9,
      Броня: 1,
      Дальность: 7,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 200,
    currentMana: 2000,
    currentDamage: 100,
    currentAgility: 9,
    currentArmor: 1,
    currentRange: 7,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "musketeer_big_shot",
        image: "musketer1.png",
        descriptionRu: "Лучи на 6 клеток, 150 урона.",
        descriptionEn:
          "Beams on 6 cells, 150 damage.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "musketeer_wall_pierce",
        image: "musketer2.png",
        descriptionRu: "Выстрел на 5 клеток (80 урона) игнорирует стены.",
        descriptionEn:
          "Shot on 5 cells (80 damage) ignores walls.",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "musketeer_area_10_200",
        image: "musketer3.png",
        descriptionRu: "Радиус 10, 200 урона всем в зоне.",
        descriptionEn:
          "Area radius 10, 200 damage to all in the area.",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Снайпер ────────────────
  {
    nameRu: "Снайпер",
    nameEn: "Sniper",
    type: "Стрелок",
    image: "sniper_alternative.png",
    stats: {
      HP: 250,
      Урон: 75,
      Мана: 3000,
      Ловкость: 8,
      Броня: 2,
      Dальность: 7,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 250,
    currentMana: 3000,
    currentDamage: 75,
    currentAgility: 8,
    currentArmor: 2,
    currentRange: 7,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "sniper_bomb_halfmap",
        image: "sniper1.png",
        descriptionRu: "Скидывает бомбу (100 урона) на своей половине карты.",
        descriptionEn:
          "Drops a bomb (100 damage) on half of the map.",
        coolDown: 15,
        currentCooldown: 0,
      },
      {
        key: "sniper_invisibility",
        image: "sniper2.png",
        descriptionRu: "Уходит в невидимость (до 3 ходов). Атака развеивает.",
        descriptionEn:
          "Goes invisible (up to 3 turns). Attack dispels.",
        coolDown: 15,
        currentCooldown: 0,
      },
      {
        key: "sniper_25percent_shot",
        image: "sniper3.png",
        descriptionRu:
          "Выстрел на 10 клеток: 25% от макс.HP цели. Требует 1 ход подготовки (без движения).",
        descriptionEn:
          "Shot on 10 cells: 25% of the target's max.HP. Requires 1 turn of preparation (without movement).",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Лесной брат ────────────────
  {
    nameRu: "Лесной брат",
    nameEn: "Forest Brother",
    type: "Стрелок",
    image: "lesnoy_brat_alternative.png",
    stats: {
      HP: 225,
      Урон: 100,
      Мана: 2000,
      Ловкость: 10,
      Броня: 1,
      Дальность: 7,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 225,
    currentMana: 2000,
    currentDamage: 100,
    currentAgility: 10,
    currentArmor: 1,
    currentRange: 7,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "forest_melee_blade",
        image: "brat1.png",
        descriptionRu: "Пассивно: если враг в 1 клетке — клинок 125 (физ.).",
        descriptionEn:
          "Passively: if the enemy is in 1 cell - blade 125 (physical).",
        coolDown: 0,
        currentCooldown: 0,
      },
      {
        key: "forest_poison_arrow",
        image: "brat2.png",
        descriptionRu: "Отравленная стрела: 100 урона сразу, через 1 ход 75.",
        descriptionEn:
          "Poisoned arrow: 100 damage immediately, 75 after 1 turn.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "forest_area_fire",
        image: "brat3.png",
        descriptionRu:
          "Область радиус 4, 1-й ход: 150 (тех.), след.3 хода: 50 (физ.).",
        descriptionEn:
          "Area radius 4, 1st turn: 150 (technical), next 3 turns: 50 (physical).",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Палач ────────────────
  {
    nameRu: "Палач",
    nameEn: "Palach",
    type: "Некромант",
    image: "palach_alternative.png",
    stats: {
      HP: 350,
      Урон: 125,
      Мана: 3000,
      Ловкость: 4,
      Броня: 3,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 350,
    currentMana: 3000,
    currentDamage: 125,
    currentAgility: 4,
    currentArmor: 3,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "palach_absorb_hit",
        image: "palach1.png",
        descriptionRu: "Поглощает 50% урона (1 раз).",
        descriptionEn:
          "Absorbs 50% damage (1 time).",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "palach_axe_legs",
        image: "palach2.png",
        descriptionRu: "50 урона + -50% ловкости на 3 хода.",
        descriptionEn:
          "50 damage + -50% agility for 3 turns.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "palach_forced_taunt",
        image: "palach3.png",
        descriptionRu:
          "2 хода: враги могут атаковать только Палача (кроме зелий/построек).",
        descriptionEn:
          "2 turns: enemies can only attack Palach (except potions/buildings).",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Жнец ────────────────
  {
    nameRu: "Жнец",
    nameEn: "Reaper",
    type: "Некромант",
    image: "zhnec_alternative.png",
    stats: {
      HP: 300,
      Урон: 125,
      Мана: 3000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 2,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 300,
    currentMana: 3000,
    currentDamage: 125,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 2,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "reaper_finisher",
        image: "zhnec1.png",
        descriptionRu: "Телепорт к цели с ≤50% HP + 150 физ.урона.",
        descriptionEn:
          "Teleport to the target with ≤50% HP + 150 physical damage.",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "reaper_drain_life",
        image: "zhnec2.png",
        descriptionRu: "100 маг. урона сквозь броню (радиус 2).",
        descriptionEn:
          "100 magic damage through armor (radius 2).",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "reaper_save_ally",
        image: "zhnec3.png",
        descriptionRu:
          "Пассивно: тратит 100 HP, спасая союзника от смерти (даёт 100 HP).",
        descriptionEn:
          "Passively: spends 100 HP, saving the ally from death (gives 100 HP).",
        coolDown: 0,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Рыцарь тьмы ────────────────
  {
    nameRu: "Рыцарь тьмы",
    nameEn: "Dark Knight",
    type: "Некромант",
    image: "ricarTmi_alternative.png",
    stats: {
      HP: 300,
      Урон: 150,
      Мана: 3000,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 300,
    currentMana: 3000,
    currentDamage: 150,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "dark_knight_armorbreak150",
        image: "ricarTmi1.png",
        descriptionRu: "Снос 3 брони или 150 урона.",
        descriptionEn:
          "Break 3 armor or 150 damage.",
        coolDown: 6,
        currentCooldown: 0,
      },
      {
        key: "dark_knight_damage_aura",
        image: "ricarTmi2.png",
        descriptionRu: "На 5 ходов, в радиусе 3, союзники получают +50 урона.",
        descriptionEn:
          "For 5 turns, in a range of 3, allies receive +50 damage.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "dark_knight_strike_crit50",
        image: "ricarTmi3.png",
        descriptionRu: "150 урона с 50% шансом на двойной урон.",
        descriptionEn:
          "150 damage with a 50% chance to double damage.",
        coolDown: 8,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Балрок ────────────────
  {
    nameRu: "Балрок",
    nameEn: "Balrog",
    type: "Некромант",
    image: "balrog_alternative.png",
    stats: {
      HP: 300,
      Урон: 150,
      Мана: 4000,
      Ловкость: 4,
      Броня: 4,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "магический",
    },
    currentHP: 300,
    currentMana: 4000,
    currentDamage: 150,
    currentAgility: 4,
    currentArmor: 4,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "balrog_absorb_magic",
        image: "balrog1.png",
        descriptionRu: "2 хода поглощает 50% маг.урона.",
        descriptionEn:
          "2 turns absorb 50% magic damage.",
        coolDown: 9,
        currentCooldown: 0,
      },
      {
        key: "balrog_dispel_negative",
        image: "balrog2.png",
        descriptionRu: "Развеять негативные эффекты (радиус 3).",
        descriptionEn:
          "Dispel negative effects (radius 3).",
        coolDown: 13,
        currentCooldown: 0,
      },
      {
        key: "balrog_dark_flame",
        image: "balrog3.png",
        descriptionRu: "Тёмное пламя: 200 маг.урона (6 клеток).",
        descriptionEn:
          "Dark flame: 200 magic damage (6 cells).",
        coolDown: 7,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Король некромантов ────────────────
  {
    nameRu: "Король некромантов",
    nameEn: "Necroking",
    type: "Некромант",
    image: "korolNecromantov_alternative.png",
    stats: {
      HP: 500,
      Урон: 150,
      Мана: 3500,
      Ловкость: 5,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 500,
    currentMana: 3500,
    currentDamage: 150,
    currentAgility: 5,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "necroking_absorb_phys_tech",
        descriptionRu: "3 хода: поглощает весь физ./тех. урон, маг. x1.5",
        descriptionEn:
          "3 turns: absorbs all physical/technical damage, magic x1.5",
        image: "korol1.png",
        coolDown: 8,
        currentCooldown: 0,
      },
      {
        key: "necroking_area_5_damage_per_count",
        descriptionRu:
          "Радиус 5, каждому врагу наносится 75 * кол-во врагов в зоне.",
        descriptionEn:
          "Radius 5, each enemy receives 75 * the number of enemies in the zone.",
        image: "korol2.png",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "necroking_mana_drain",
        descriptionRu: "До 5 ходов: -50/100/150/200/250 маны у врага.",
        descriptionEn:
          "For 5 turns: -50/100/150/200/250 mana to the enemy.",
        image: "korol3.png",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Броненосец Тао ────────────────
  {
    nameRu: "Броненосец Тао",
    nameEn: "Tao",
    type: "Танк",
    image: "bronenosecTao_alternative.png",
    stats: {
      HP: 650,
      Урон: 175,
      Мана: 2000,
      Ловкость: 3,
      Броня: 4,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 650,
    currentMana: 2000,
    currentDamage: 175,
    currentAgility: 3,
    currentArmor: 4,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0],
    abilities: [
      {
        key: "tao_jump_smash",
        image: "tao1.png",
        descriptionRu:
          "Прыгает на 8 клеток, в точке приземления 200 урона по радиусу 4.",
        descriptionEn:
          "Jumps 8 cells, 200 damage at the landing point to a radius of 4.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "tao_charge_beam",
        image: "tao2.png",
        descriptionRu: "Рывок на 6 клеток, наносит 200 урона.",
        descriptionEn:
          "Charge 6 cells, 200 damage.",
        coolDown: 7,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Голиаф ────────────────
  {
    nameRu: "Голиаф",
    nameEn: "Goliath",
    type: "Танк",
    image: "goliath_alternative.png",
    stats: {
      HP: 550,
      Урон: 175,
      Мана: 2000,
      Ловкость: 3,
      Броня: 5,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 550,
    currentMana: 2000,
    currentDamage: 175,
    currentAgility: 3,
    currentArmor: 5,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0],
    abilities: [
      {
        key: "goliath_stone_skin",
        image: "goliath1.png",
        descriptionRu: "Щит (300 HP) на 10 ходов (сам себе).",
        descriptionEn:
          "Shield (300 HP) for 10 turns (himself).",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "goliath_aoe_slam",
        image: "goliath2.png",
        descriptionRu: "Радиус 2 вокруг, 200 урона.",
        descriptionEn:
          "Radius 2 around, 200 damage.",
        coolDown: 7,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Гигант ────────────────
  {
    nameRu: "Гигант",
    nameEn: "Giant",
    type: "Танк",
    image: "giant_alternative.png",
    stats: {
      HP: 1000,
      Урон: 200,
      Мана: 1000,
      Ловкость: 3,
      Броня: 2,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 1000,
    currentMana: 1000,
    currentDamage: 200,
    currentAgility: 3,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0],
    abilities: [
      {
        key: "giant_boulder_throw",
        image: "giant1.png",
        descriptionRu: "Бросок валуна (7 клеток), 150 урона.",
        descriptionEn:
          "Boulder throw (7 cells), 150 damage.",
        coolDown: 10,
        currentCooldown: 0,
      },
      {
        key: "giant_ground_slam",
        image: "giant2.png",
        descriptionRu: "Радиус 3, 300 урона всем врагам.",
        descriptionEn:
          "Radius 3, 300 damage to all enemies.",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Страж ────────────────
  {
    nameRu: "Страж",
    nameEn: "Guard",
    type: "Танк",
    image: "strazh_alternative.png",
    stats: {
      HP: 550,
      Урон: 150,
      Мана: 2500,
      Ловкость: 4,
      Броня: 5,
      Дальность: 1,
    },
    features:
      "Союзный (тех.) урон проходит сквозь Стража. Вражеский (тех.) урон с 10% шансом рикошетит.",
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      deflectChance: 10, // 10% рикошета вражеского тех.урона
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 550,
    currentMana: 2500,
    currentDamage: 150,
    currentAgility: 4,
    currentArmor: 5,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0],
    abilities: [
      {
        key: "guard_flashbang",
        image: "guard1.png",
        descriptionRu: "Радиус 5, 25 урона игнор брони, стан 1 ход.",
        descriptionEn:
          "Radius 5, 25 damage ignore armor, stand 1 turn.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "guard_shield_build",
        image: "guard2.png",
        descriptionRu:
          "Ставит постройку-щит (300HP,3бр) или даёт союзнику на 10 ходов.",
        descriptionEn:
          "Places a building-shield (300HP, 3 armor) or gives a friend for 10 turns.",
        coolDown: 10,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Сиехилд ────────────────
  {
    nameRu: "Сиехилд",
    nameEn: "Siehild",
    type: "Танк",
    image: "siehild_alternative.png",
    stats: {
      HP: 700,
      Урон: 200,
      Мана: 2000,
      Ловкость: 3,
      Броня: 2,
      Дальность: 1,
    },
    features: "Все способности перезагружаются с начала игры.",
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 700,
    currentMana: 2000,
    currentDamage: 200,
    currentAgility: 3,
    currentArmor: 2,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    // если нужно 2 способности, только два currentCooldown
    currentCooldowns: [0, 0],
    abilities: [
      {
        key: "siehild_build_tower",
        image: "siehild1.png",
        descriptionRu: "Строит башню (400 HP, 75 маг.урона в радиусе 1).",
        descriptionEn:
          "Builds a tower (400 HP, 75 magic damage in a radius of 1).",
        coolDown: 10,
        currentCooldown: 10,
      },
      {
        key: "siehild_upgrade_tower",
        image: "siehild2.png",
        descriptionRu:
          "Улучшает башню до 600 HP, 150 ур., площадь 5x5, стан раз в 2 хода.",
        descriptionEn:
          "Upgrades the tower to 600 HP, 150 damage, area 5x5, stand once every 2 turns.",
        coolDown: 10,
        currentCooldown: 10,
      },
    ],
  },

  // ──────────────── Панцир 3 ────────────────
  {
    nameRu: "Панцир 3",
    nameEn: "Panzir 3",
    type: "Меха",
    image: "panzir3_alternative.png",
    stats: {
      HP: 350,
      Урон: 150,
      Мана: 0,
      Ловкость: 7,
      Броня: 3,
      Дальность: 5,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 350,
    currentMana: 0,
    currentDamage: 150,
    currentAgility: 7,
    currentArmor: 3,
    currentRange: 5,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "panzir3_passive_check_enemies",
        image: "panzir1.png",
        descriptionRu: "Пассивно: если в радиусе 6 есть 3+ врагов, ловкость +2.",
        descriptionEn:
          "Passively: if there are 3+ enemies in a radius of 6, agility +2.",
        coolDown: 0,
        currentCooldown: 0,
      },
      {
        key: "panzir3_repair",
        image: "panzir2.png",
        descriptionRu: "+120 HP (если ≤230), +1 броня (если ≤4).",
        descriptionEn:
          "+120 HP (if ≤230), +1 armor (if ≤4).",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "panzir3_burst_shot",
        image: "panzir3.png",
        descriptionRu: "В области 4 вокруг, 5*50 урона (в сумме 250).",
        descriptionEn:
          "In the area of 4 around, 5*50 damage (in total 250).",
        coolDown: 9,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Сталевар ────────────────
  {
    nameRu: "Сталевар",
    nameEn: "Steelworker",
    type: "Меха",
    image: "stalevar_alternative.png",
    stats: {
      HP: 400,
      Урон: 150,
      Мана: 0,
      Ловкость: 4,
      Броня: 3,
      Дальность: 1,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 400,
    currentMana: 0,
    currentDamage: 150,
    currentAgility: 4,
    currentArmor: 3,
    currentRange: 1,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "stalevar_plasma_shot",
        image: "stalevar1.png",
        descriptionRu: "Плазменный снаряд (7 клеток), 150 урона.",
        descriptionEn:
          "Plasma shot (7 cells), 150 damage.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "stalevar_regen4x50",
        image: "stalevar2.png",
        descriptionRu: "4 хода по +50 HP/ход.",
        descriptionEn:
          "4 turns of +50 HP/turn.",
        coolDown: 12,
        currentCooldown: 0,
      },
      {
        key: "stalevar_beam_7_200",
        image: "stalevar3.png",
        descriptionRu: "Луч 7 клеток, 200 урона.",
        descriptionEn:
          "Beam 7 cells, 200 damage.",
        coolDown: 11,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── МК-10 ────────────────
  {
    nameRu: "МК-10",
    nameEn: "MK-10",
    type: "Меха",
    image: "mk10_alternative.png",
    stats: {
      HP: 400,
      Урон: 150,
      Мана: 0,
      Ловкость: 4,
      Броня: 3,
      Дальность: 4,
    },
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "технический",
    },
    currentHP: 400,
    currentMana: 0,
    currentDamage: 150,
    currentAgility: 4,
    currentArmor: 3,
    currentRange: 4,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "mk10_ignore_dodge",
        image: "mk101.png",
        descriptionRu: "3 хода: игнор обычного уворота при атаках.",
        descriptionEn:
          "3 turns: ignore normal dodge when attacked.",
        coolDown: 7,
        currentCooldown: 0,
      },
      {
        key: "mk10_3_missiles_75each",
        image: "mk102.png",
        descriptionRu: "В радиусе 9 выпускает 3 ракеты по 75 урона (итого 225).",
        descriptionEn:
          "In a radius of 9, 3 missiles are released for 75 damage (total 225).",
        coolDown: 9,
        currentCooldown: 0,
      },
      {
        key: "mk10_big_missile",
        image: "mk103.png",
        descriptionRu: "Ракета на 7 клеток (250 в точку, 100 вокруг 1).",
        descriptionEn:
          "Missile 7 cells (250 in the point, 100 around 1).",
        coolDown: 12,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Алебардист ────────────────
  {
    nameRu: "Алебардист",
    nameEn: "Alebardist",
    type: "Наёмник",
    image: "alebardist_alternative.png",
    stats: {
      HP: 350,
      Урон: 150,
      Мана: 1500,
      Ловкость: 6,
      Броня: 2,
      Дальность: 2,
    },
    features: "Тёплые варежки: 25% шанс вытолкнуть при первой способности.",
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 350,
    currentMana: 1500,
    currentDamage: 150,
    currentAgility: 6,
    currentArmor: 2,
    currentRange: 2,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    currentCooldowns: [0, 0, 0],
    abilities: [
      {
        key: "halberdier_aoe_3cells_150",
        image: "alebardist1.png",
        descriptionRu:
          "Создаёт область радиус 3 вокруг себя, 150 урона по врагам.",
        descriptionEn:
          "Creates an area of radius 3 around itself, 150 damage to enemies.",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "halberdier_thrust_stun",
        image: "alebardist2.png",
        descriptionRu: "Луч 3 клетки, 175 урона, 50% шанс стана 1 ход.",
        descriptionEn:
          "Beam 3 cells, 175 damage, 50% chance to stun for 1 turn.",
        coolDown: 5,
        currentCooldown: 0,
      },
      {
        key: "halberdier_heavy_strike",
        image: "alebardist3.png",
        descriptionRu: "Усиленная атака на 2 клетки (200 урона).",
        descriptionEn:
          "Heavy strike 2 cells (200 damage).",
        coolDown: 4,
        currentCooldown: 0,
      },
    ],
  },

  // ──────────────── Йети ────────────────
  {
    nameRu: "Йети",
    nameEn: "Yeti",
    type: "Танк",
    image: "jeti_alternative.png",
    stats: {
      HP: 600,
      Урон: 100,
      Мана: 2000,
      Ловкость: 4,
      Броня: 1,
      Дальность: 3,
    },
    features:
      "Станит враж. постройку на 1 ход, если бьёт её (эффект постройки не действует следующий ход).",
    passiveAbilities: [],
    functions: {
      movementAbility: true,
      actionAbility: true,
      abilityUsability: true,
      itemUsability: true,
    },
    advancedSettings: {
      appliedDamageMultiplier: 1,
      damageMultiplier: 1,
      vampirism: 0,
      basicDodge: 0,
      advancedDodge: 0,
      characterLayer: 1,
      damageType: "физический",
    },
    currentHP: 600,
    currentMana: 2000,
    currentDamage: 100,
    currentAgility: 4,
    currentArmor: 1,
    currentRange: 3,
    position: null,
    inventory: [],
    inventoryLimit: 3,
    effects: [],
    // Йети имеет 2 способности
    currentCooldowns: [0, 0],
    abilities: [
      {
        key: "yeti_flexibility_buff_debuff",
        image: "jeti1.png",
        descriptionRu: "На 4 хода: +2 ловкости союзнику или -1/2 ловкости врагу.",
        descriptionEn:
          "For 4 turns: +2 agility to the ally or -1/2 agility to the enemy.",
        coolDown: 4,
        currentCooldown: 0,
      },
      {
        key: "yeti_freeze_area",
        image: "jeti2.png",
        descriptionRu:
          "Радиус 2 на 5 ходов: 1й ход 25 dmg, 2й 50 dmg, с 3го заморозка (ловкость=1).",
        descriptionEn:
          "Radius 2 for 5 turns: 1st turn 25 dmg, 2nd turn 50 dmg, with 3rd turn freezing (agility=1).",
        coolDown: 7,
        currentCooldown: 0,
      },
    ],
  },
];

export const items = [
  {
    nameRu: "Философский камень",
    nameEn: "Philosophical Stone",
    image: "filosofskiiKamen.png",
    shopType: "Магический",
    price: 300,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 25% к получаемому из врагов золоту. Добавляет 250 к значению и лимиту маны персонажа. Добавляет 100 к значению и лимиту здоровья персонажа. Увеличение золота: [500 => (+25%) => 625]",
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Философского камня.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 25% to the gold received from enemies. Adds 250 to the value and limit of mana for the character. Adds 100 to the value and limit of health for the character. Increase gold: [500 => (+25%) => 625]",
      activeAbility: null,
      availability:
        "In the inventory of one character, can only be one Philosophical Stone.",
    },
    onWear: (character) => {
      character.currentMana += 250;
      character.currentHP += 100;
    },
    onRemove: (character) => {
      character.currentMana -= 250;
      character.currentHP -= 100;
    },
  },
  {
    nameRu: "Корона Ра",
    nameEn: "Crown of Ra",
    image: "koronaRa.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    cooldown: {
      initial: 10,
      current: 0,
    },
    descriptionRu: {
      passiveAbility:
        "Атака (пассивная): Урон: 50 (физ.) Тип: область Радиус: 3 клетки.",
      activeAbility:
        "Цена: 10 ходов. Урон: 100 урона/ход. Тип: луч Дальность: 4 клетки. Длительность: 5 ходов. Описание: Из Короны исходит луч света, испепеляющий врагов на своём пути. Наносит 100 урона/ход в течении 5 ходов длинной 4 клетки, при этом хозяин не может поворачивать, двигаться и как-либо действовать, кроме как выключить луч.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одной Короны Ра .",
    },
    descriptionEn: {
      passiveAbility:
        "Attack (passive): Damage: 50 (physical) Type: area Radius: 3 cells.",
      activeAbility:
        "Price: 10 turns. Damage: 100 damage/turn. Type: beam Range: 4 cells. Duration: 5 turns. Description: From the Crown, a beam of light emanates, scorching enemies on its path. Deals 100 damage/turn for 5 turns, 4 cells long, while the owner cannot turn, move, or otherwise act, except to turn off the beam.",
    },
  },
  {
    nameRu: "Изумруд времени",
    nameEn: "Emerald of Time",
    image: "izumrudVremeni.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Отнимает -5 от цены всех способностей персонажа. Если перед использованием, способность перезагружается 1-5 ходов, то при одевании Изумруда времени, способность будет доступна к использованию каждый ход.",
      activeAbility:
        "Цена: 10 ходов. Обнуляет цену всех активных способностей всех предметов в инвентаре (если такие имеются) кроме этой способности.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одного",
    },
    descriptionEn: {
      passiveAbility:
        "Removes -5 from the price of all abilities of the character. If before use, the ability is reloaded 1-5 turns, then when the Emerald of Time is worn, the ability will be available to use every turn.",
      activeAbility:
        "Price: 10 turns. Resets the price of all active abilities of all items in the inventory (except this ability).",
    },
    onWear: (character) => {
      for (const ability of character.abilities) {
        ability.cooldown = Math.max(ability.cooldown - 5, 0);
        ability.currentCooldown = Math.max(ability.currentCooldown - 5, 0);
      }
    },
    onRemove: (character) => {
      for (const ability of character.abilities) {
        ability.cooldown = characters.find(ch => ch.name === character.name).abilities.find(ab => ab.key === ability.key).cooldown;
        ability.currentCooldown = Math.min(ability.currentCooldown + 5, ability.cooldown);
      }
    },
  },
  {
    nameRu: "Обращатель времени",
    nameEn: "Time Reverser",
    image: "obrashatelVremeni.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Цена: 20 ходов Обнуляет цену всех способностей персонажа-носителя.",
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Обращателей времени, но активная способность может быть активирована только на первом.",
    },
    descriptionEn: {
      passiveAbility: null,
      activeAbility:
        "Price: 20 turns. Resets the price of all abilities of the character.",
      availability:
        "In the inventory of one character, can have as many Time Reversers as you want, but the active ability can only be activated on the first one.",
    },
  },
  {
    nameRu: "Уроборос",
    nameEn: "Uroboros",
    image: "uroboros.png",
    shopType: "Магический",
    price: 350,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Цена: 15 ходов Перерождает персонажа-носителя. По сути, он обновляет персонажа, откатывая его состояние к началу игры. Все эффекты на персонаже сбрасываются. В случае с Энтом, его превращение также сбрасывается, ведь является пассивной способностью с положительным эффектом. Все предметы, кроме Уробороса, удаляются из инвентаря. Тем не менее, персонаж остаётся на своём месте.",
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Уроборосов, но при перезарядке одного, пользоваться другим нельзя.",
    },
    descriptionEn: {
      passiveAbility: null,
      availability:
        "In the inventory of one character, can have as many Uroboros as you want, but when one is reloaded, you cannot use the other one.",
      activeAbility:
        "Price: 15 turns. Resurrects the character-owner. In essence, it updates the character, resetting his state to the beginning of the game. All effects on the character are reset. In the case of Ent, his transformation is also reset, since it is a passive ability with a positive effect. All items, except the Uroboros, are removed from the inventory. However, the character remains in the same place.",
    },
  },
  {
    nameRu: "Сапоги света",
    nameEn: "Light Boots",
    image: "lightBoots.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: "Добавляет +2 к ловкости персонажа-носителя.",
      activeAbility:
        'Цена: 12 ходов Телепортирует к союзнику или союзному сооружению (Турель, Башня лучников, прочие строения).  Примечание: Постройки не наносящие негативный эффект противнику/не улучшающие вашу игру не являются союзными.  Пример:  Башня Сиехилда => вредит только противнику => союзная постройка. Стены Древнего => не вредят никому => нейтральная постройка. Исключение: Храм. Тем не менее, храм, захваченный вашей командой, является союзной постройкой. Примечание 1.5: Вторая способность Легионера это "Призванное существо". Призванное существо, является постройкой принадлежащей команде призывателя. Примечание 2: В случае со вселением Вендиго, при вселении, персонаж стаёт вражеским. Следовательно телепорт к нему невозможен.  Примечание 3: Телепорт не может осуществляться в красный квадрат.',
      availability:
        "В инвентаре одного персонажа, может находиться не более одних Сапог света.",
    },
    descriptionEn: {
      passiveAbility: "Adds +2 to the agility of the character-owner.",
      activeAbility:
        "Price: 12 turns. Teleports to a friendly character or friendly structure (Turret, Archer Tower, other buildings). Note: Buildings that do not inflict negative effects on the opponent/do not improve your game are not friendly. Example: Ancient Tower => damages only the opponent => friendly structure. Walls of the Ancient => do not harm anyone => neutral structure. Exception: Temple. However, the temple captured by your team is a friendly structure.",
      availability:
        "In the inventory of one character, can only have one pair of Light Boots.",
    },
    onWear: (character) => {
      character.currentAgility += 2;
    },
    onRemove: (character) => {
      character.currentAgility -= 2;
    },
  },
  {
    nameRu: "Амулет равновесия",
    nameEn: "Amulet of Balance",
    image: "amuletRavnovesya.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        'Преобразует цену всех способностей в ману. Соотношение: 1 ход = 100 маны. Примечание: Распространяется только на способности использующие в качестве цены ходы. Примечание 2: На способности, с ценой "Пассивно" Амулет не распространяется. Примечание 3: Если, при надетом Амулете равновесия использовать хотя бы одну способность использующую ходы, при снятии, все способности уйдут в перезагрузку.',
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Амулетов равновесия.",
    },
    descriptionEn: {
      passiveAbility:
        "Converts the price of all abilities into mana. Ratio: 1 turn = 100 mana. Note: Only on abilities that use turns as a price. Note 2: On abilities with the price 'Passive' the Amulet does not apply.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can have as many Amulets of Balance as you want.",
    },
    onWear: (character) => {
      for (const ability of character.abilities) {
        ability.cooldown = 0;
        ability.currentCooldown = 0;
      }
      addEffect(character, {
        name: "Амулет равновесия",
        description: 'Превращает цену всех способностей в ману. Соотношение: 1 ход = 100 маны. Примечание: Распространяется только на способности использующие в качестве цены ходы. Примечание 2: На способности, с ценой "Пассивно" Амулет не распространяется. Примечание 3: Если, при надетом Амулете равновесия использовать хотя бы одну способность использующую ходы, при снятии, все способности уйдут в перезагрузку.',
        effectType: "neutral",
        canCancel: true,
        typeOfEffect: "on ability use",
        turnsRemain: Infinity,
        effect: () => {

        },
        consequence: () => {
        },
      });
    },
    onRemove: (character) => {
      removeEffect(character, "amuletRavnovesya");
      for (const ability of character.abilities) {
        ability.cooldown = characters.find(ch => ch.name === character.name).abilities.find(ab => ab.key === ability.key).cooldown;
        ability.currentCooldown = ability.cooldown;
      }
    }
  },
  {
    nameRu: "Рюкзак",
    nameEn: "Backpack",
    image: "backpack.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 4 единицы инвентаря. При этом сам занимает одну в вашем.",
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Рюкзаков. Также в инвентаре Рюкзака, может находиться сколько угодно Рюкзаков.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 4 inventory units. At the same time, it occupies one in your inventory.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can have as many Backpacks as you want. Also, in the inventory of the Backpack, can have as many Backpacks as you want.",
    },
    onWear: (character) => {
      character.inventoryLimit += 4;
    },
    onRemove: (character) => {
      character.inventoryLimit -= 4;
    },
  },
  {
    nameRu: "Перчатка повышенного урона",
    nameEn: "Damage Gloves",
    image: "damageGloves.png",
    shopType: "Магический",
    price: 250,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: "Атаки Перчаткой повышенного урона наносят +25 урона.",
      activeAbility:
        "Цена: 7 ходов Длительность: 3 хода Добавляет хозяину 75 урона (в сумме +100 урона) на 3 хода. При этом, со включённой активной способностью Перчатки повышенного урона, хозяин не может использовать способности (не распространяется на способности предметов).",
      availability:
        "В инвентаре одного персонажа, может находиться не более одной Перчатки повышенного урона.",
    },
    descriptionEn: {
      passiveAbility: "Attacks with Damage Gloves deal +25 damage.",
      activeAbility:
        "Price: 7 turns. Duration: 3 turns. Adds 75 damage (in total +100 damage) for 3 turns. At the same time, with the active ability of the Damage Gloves, the owner cannot use abilities (does not apply to abilities from items).",
      availability:
        "In the inventory of one character, can only have one pair of Damage Gloves.",
    },
    onWear: (character) => {
      character.currentDamage += 25;
    },
    onRemove: (character) => {
      character.currentDamage -= 25;
    },
  },
  {
    nameRu: "Пространственный тетраэдр",
    nameEn: "Space Tetrahedron",
    image: "spaceTetraedr.png",
    shopType: "Магический",
    price: 100,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        'Цена: 0 (после использования исчезает) Добавляет 1 ячейку инвентаря. При этом, перед активацией сам занимает одну в вашем. После активации, вы должны в этот же ход "положить" в него предмет. В противном случае 4-я ячейка инвентаря пропадёт, через 1 ход. Также после доставания из тетраэдра предмета когда угодно, пространство в котором он лежал исчезает.',
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Пространственных тетраэдров .",
    },
    descriptionEn: {
      passiveAbility: null,
      activeAbility:
        "Price: 0 (after use disappears). Adds 1 inventory unit. At the same time, it occupies one in your inventory. After activation, you must 'put' the item in it in the same turn. Otherwise, the 4th inventory unit will disappear, through 1 turn. Also, after taking an item out of the tetrahedron at any time, the space in which it was located disappears.",
      availability:
        "In the inventory of one character, can have as many Space Tetrahedrons as you want.",
    },
  },
  {
    nameRu: "Скипетр Кроноса",
    nameEn: "Cronus's Scepter",
    image: "skipitrHronosa.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 25% к шансу нанесения двойного урона. Распространяется как на обычные атаки, так и на способности. Но только на способности с мгновенным уроном. Примечание: 3-я способность Лесного брата и подобные ему (где урон написан (n;n*n). Например (100; 50*2)), работают следующим образом: Первый удар в них, является мгновенным уроном. Таким образом, шанс удвоенного урона будет распространяться только на него. Примечание 2: При атаке персонажа в кустах, либо с шансом уклона: Сначала бросается шанс удвоенного урона, после, шанс уклона. Примечание 3: Не распространяется на урон возведённых построек и брошенных зелий (Например, 2-я и 3-я спсобности Подрывницы) Примечание 4: Может удвоить только числовой (или процентный) урон. Не распространяется на стан (Не может удвоить его длительность) и т.п.",
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Скипетра Кроноса.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 25% to the chance of double damage. Applies to both normal attacks and abilities. Only to abilities with instant damage. Note: The 3rd ability of the Forest Brother and similar (where the damage is written (n;n*n). For example (100; 50*2)), work as follows: The first hit in them is instant damage. Thus, the chance of double damage will only apply to it. Note 2: When attacking a character in bushes, or with a chance of dodge: First, the chance of double damage is thrown, after, the chance of dodge. Note 3: Does not apply to the damage of raised buildings and thrown potions (for example, the 2nd and 3rd abilities of the Demolitionist). Note 4: Can only double the numerical (or percentage) damage. Does not apply to the station (Cannot double its duration) and so on.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can only have one pair of Cronus's Scepter.",
    },
  },
  {
    nameRu: "Корона Лича",
    nameEn: "Lich's Crown",
    image: "koronaLicha.png",
    shopType: "Магический",
    price: 350,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 1000 к значению и лимиту маны персонажа-носителя.",
      activeAbility:
        "Цена: 10 ходов Длительность: 4 хода Даёт хозяину невосприимчивость к 25% магического урона и  50% физического урона. Примечание: Распространяется на обычный урон, урон от способностей, построек и зелий.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одной Короны Лича.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 1000 to the value and limit of the mana of the character-owner.",
      activeAbility:
        "Price: 10 turns. Duration: 4 turns. Gives the owner immunity to 25% magic damage and 50% physical damage. Note: Applies to normal damage, damage from abilities, buildings and potions.",
      availability:
        "In the inventory of one character, can only have one pair of Lich's Crown.",
    },
    onWear: (character) => {
      character.currentMana += 1000;
      character.stats.Mana += 1000;
    },
    onRemove: (character) => {
      character.currentMana = Math.max(character.currentMana - 1000, 0);
      character.stats.Mana -= 1000;
    },
  },
  {
    nameRu: "Кольцо ветров",
    nameEn: "Wind Ring",
    image: "kolcoVetrov.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Даёт 10% универсального уклонения. Универсальное уклонение позволяет избегать не только урон от обычных атак, но также и мгновенный урон от способностей (а также автоматические атаки построек).",
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Колец ветров.",
    },
    descriptionEn: {
      passiveAbility:
        "Gives 10% universal dodge. Universal dodge allows you to avoid not only damage from normal attacks, but also instant damage from abilities (and also automatically attacks from buildings).",
      activeAbility: null,
      availability:
        "In the inventory of one character, can have as many Wind Rings as you want.",
    },
    onWear: (character) => {
      character.advancedSettings.advancedDodge += 10;
    },
    onRemove: (character) => {
      character.advancedSettings.advancedDodge -= 10;
    },
  },
  {
    nameRu: "Кристалл маны",
    nameEn: "Mana Crystal",
    image: "manaCrystall.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: "Добавляет 2000 к значению и лимиту маны носителя.",
      activeAbility:
        "Цена: 5 ходов Добавляет 400 к значению (но не к лимиту) маны хозяина.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Кристалла маны.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 2000 to the value and limit of the mana of the character-owner.",
      activeAbility:
        "Price: 5 turns. Adds 400 to the value (but not to the limit) of the mana of the owner.",
      availability:
        "In the inventory of one character, can only have one pair of Mana Crystal.",
    },
    onWear: (character) => {
      character.currentMana += 2000;
      character.stats.Mana += 2000;
    },
    onRemove: (character) => {
      character.currentMana = Math.max(character.currentMana - 2000, 0);
      character.stats.Mana -= 2000;
    },
  },
  {
    nameRu: "Эльфийский плащ",
    nameEn: "Elvish Cloak",
    image: "elvishCloak.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 25% к шансу обычного уклонения. Обычное уклонение позволяет избежать только обычных атак.",
      activeAbility:
        "Цена: 8 ходов Длительность: 2 хода Позволяет входить в невидимость на 2 хода.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Эльфийского плаща.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 25% to the chance of normal dodge. Normal dodge allows you to avoid only normal attacks.",
      activeAbility:
        "Price: 8 turns. Duration: 2 turns. Allows you to enter invisibility for 2 turns.",
      availability:
        "In the inventory of one character, can only have one pair of Elvish Cloak.",
    },
    onWear: (character) => {
      character.advancedSettings.basicDodge += 25;
    },
    onRemove: (character) => {
      character.advancedSettings.basicDodge -= 25;
    },
  },
  {
    nameRu: "Зелье восстановления",
    nameEn: "Potion of Recovery",
    image: "potionOfRecovery.png",
    shopType: "Магический",
    price: 100,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Цена: 0 (после использования исчезает) Добавляет хозяину: +150 к значению НР. +1500 к значению маны.",
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Зелий восстановления.",
    },
    descriptionEn: {
      passiveAbility: null,
      activeAbility:
        "Price: 0 (after use disappears). Adds the owner: +150 to the value of HP. +1500 to the value of mana.",
      availability:
        "In the inventory of one character, can have as many Potion of Recovery as you want.",
    },
  },
  {
    nameRu: "Свиток телепортации",
    nameEn: "Teleport Scroll",
    image: "teleportScroll.png",
    shopType: "Магический",
    price: 50,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Цена: 0 (после использования исчезает) Телепортирует к союзным постройкам. Не телепортирует к союзникам.",
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Свитков телепортации.",
    },
    descriptionEn: {
      passiveAbility: null,
      activeAbility:
        "Price: 0 (after use disappears). Teleports to friendly buildings. Does not teleport to allies.",
      availability:
        "In the inventory of one character, can have as many Teleport Scrolls as you want.",
    },
  },
  {
    nameRu: "Катана",
    nameEn: "Katana",
    image: "katana.png",
    shopType: "Магический",
    price: 300,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 50 к значению урона персонажа-носителя. Бонус работает только на персонажах с типом: Иной и Рыцарь.",
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться не более одной Катаны.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 50 to the value of damage of the character-owner. Bonus works only on characters with the type: Other and Knight.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can only have one pair of Katana.",
    },
    onWear: (character) => {
      if (character.type === "Иной" || character.type === "Рыцарь") {
        character.currentDamage += 50;
      }
    },
    onRemove: (character) => {
      if (character.type === "Иной" || character.type === "Рыцарь") {
        character.currentDamage -= 50;
      }
    },
  },
  {
    nameRu: "Перчатка Мидаса",
    nameEn: "Midas Glove",
    image: "perchatkaMidasa.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 50% к получаемому за убийство золоту. Причём, даже просто существование у одного из персонажей Перчатки Мидаса позволяет получать +50% с любого убийства любым персонажем.  [500 =>(+50%)=>750]",
      activeAbility: "Цена: 5 ходов Превращает 500 маны хозяина в 50 золота.",
      availability:
        "В инвентаре одного персонажа, может находиться сколько угодно Перчаток Мидаса, но эффекты складываться не будут.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 50% to the amount of gold received for killing. Even if only one of the characters has a Midas Glove, the bonus will be +50% from any kill by any character. [500 =>(+50%)=>750]",
      activeAbility: "Price: 5 turns. Converts 500 mana of the owner into 50 gold.",
      availability:
        "In the inventory of one character, can have as many Midas Gloves as you want, but the effects will not stack.",
    },
  },
  {
    nameRu: "Телескоп",
    nameEn: "Telescope",
    image: "telescope.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 3 к значению дальности персонажа. Добавляет 2 к значению дальности на способностях. Примечание: Это не распространяется на размер области, длительность эффекта и т.д. Примечание 2: Не распространяется на дальность взаимодействия с магазинами и т.д. Влияет именно на дальность атаки. Примечание 3: Бонус добавляется только персонажам с типом: Стрелок, Меха.",
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Телескопа.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 3 to the value of the range of the character. Adds 2 to the value of the range of abilities. Note: This does not apply to the size of the area, duration of the effect, etc. Note 2: Does not apply to the range of interaction with shops and etc. Affects only the range of the attack. Note 3: Bonus is added only to characters with the type: Shooter, Mechanic.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can only have one pair of Telescope.",
    },
    onWear: (character) => {
      if (character.type === "Стрелок" || character.type === "Меха") {
        character.currentRange += 3;
      }
    },
    onRemove: (character) => {
      if (character.type === "Стрелок" || character.type === "Меха") {
        character.currentRange -= 3;
      }
    },
  },
  {
    nameRu: "Алый бокал",
    nameEn: "Red Goblet",
    image: "aliyBokal.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет вампиризм с атак персонажу-носителю.  Физический урон = 50%. [100 (физ.) урона => (50%) => +50 НР] Магический = 25% [100 (маг.) урона => (25%) => +25 НР] Примечание: Вампиризм распространяется на урон от обычных атак, а также мгновенный урон у способностей.",
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Алого бокала.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds vampirism from attacks to the character-owner. Physical damage = 50%. [100 (physical) damage => (50%) => +50 HP] Magic = 25% [100 (magic) damage => (25%) => +25 HP] Note: Vampirism applies to damage from normal attacks, as well as instant damage from abilities.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can only have one pair of Red Goblet.",
    },
  },
  {
    nameRu: "Сумеречный плащ",
    nameEn: "Twilight Cloak",
    image: "twilightCloak.png",
    shopType: "Магический",
    price: 500,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Добавляет 150 к значению и лимиту НР персонажа-носителя.",
      activeAbility:
        "Цена: 6 ходов (Активируется самостоятельно) Спасает хозяина от смертельного удара. Распространяется на любой вид наносимого урона, вплоть до урона от зелий. После спасения добавляет хозяину 25% от лимита НР. 25% высчитывается и от всех бонусов на лимит НР. Например: Кровавый маг: 500 НР [500HP + 150НР от плаща + 100НР от ф.камня = 750НР => (25%) => 188HP] После спасения, Сумеречный плащ уходит в перезагрузку.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Сумеречного плаща.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 150 to the value and limit of HP of the character-owner.",
      activeAbility:
        "Price: 6 turns (Activates automatically). Saves the owner from a致命打击. Applies to any type of damage, including damage from potions. After saving, adds 25% of the limit of HP to the owner. 25% is calculated from all bonuses to the limit of HP. For example: Bloody Mage: 500 HP [500HP + 150HP from cloak + 100HP from physical stone = 750HP => (25%) => 188HP] After saving, the Twilight Cloak goes into a reload.",
      availability:
        "In the inventory of one character, can only have one pair of Twilight Cloak.",
    },
    onWear: (character) => {
      character.stats.HP += 150;
      character.currentHP += 150;
    },
    onRemove: (character) => {
      character.stats.HP = Math.max(character.stats.HP - 150, 0);
      character.currentHP = Math.max(character.currentHP - 150, 0);
    },
  },
  {
    nameRu: "Кирка кобольда",
    nameEn: "Kobold Axe",
    image: "kirkaKobolda.png",
    shopType: "Магический",
    price: 300,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        'Урон по постройкам +25% урона. Золото за убийство персонажем-носителем +20% Таким образом: Урон по постройкам: [100 урона => (+25%) => 125 урона] Золото за убийство: [500 => (+20%) => 600] Примечание: Бонус на урон по постройкам не распространяется на "Призванное существо".',
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа, может находиться не более одной Кирки кобольда.",
    },
    descriptionEn: {
      passiveAbility:
        "Adds 25% to the damage of the character-owner to buildings. The amount of gold received for killing the character-owner is increased by 20%. Thus: Damage to buildings: [100 damage => (+25%) => 125 damage] Gold for killing: [500 => (+20%) => 600] Note: The bonus to damage to buildings does not apply to 'Summoned Creature'.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can only have one pair of Kobold Axe.",
    },
  },
  {
    nameRu: "Двойной тессеракт",
    nameEn: "Double Tesseract",
    image: "doubleTesserakt.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Цена: 10 ходов Позволяет меняться местами с обладателем второй части пары Двойного тессеракта. Даже если этим обладателем будет противник. Если один из тессерактов будет разрушен, оставшийся будет перемещать к союзным телепортам.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одного Двойного тессеракта.",
    },
    descriptionEn: {
      passiveAbility: null,
      activeAbility:
        "Price: 10 turns. Allows you to change places with the owner of the second part of the pair of Double Tesseract. Even if this owner is a opponent. If one of the tesseracts is destroyed, the remaining one will be teleported to friendly buildings.",
      availability:
        "In the inventory of one character, can only have one pair of Double Tesseract.",
    },
  },
  {
    nameRu: "Ртутные сапоги",
    nameEn: "Mercury Boots",
    image: "rtutnieSapogi.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: "Добавляет 3 к значению ловкости персонажа-носителя.",
      activeAbility:
        "Цена: 10 ходов Длительность: 3 хода Удваивает значение ловкости хозяина. Бонусы к ловкости учитываются.  Например: Лесной брат: 10 ловкости [10 => +3 от Ртутных сапог +2 от Сапог света x2 от зелья ускорения = 30 ловкости => (x2) => 60 ловкости] Во время активной способности, этот предмет нельзя сбрасывать или воровать.",
      availability:
        "В инвентаре одного персонажа, может находиться не более одних Ртутных сапог.",
    },
    descriptionEn: {
      passiveAbility: "Adds 3 to the value of agility of the character-owner.",
      activeAbility:
        "Price: 10 turns. Duration: 3 turns. Doubles the value of agility of the owner. Bonus agility is taken into account. For example: Forest Brother: 10 agility [10 => +3 from Mercury Boots +2 from Light Boots x2 from speed potion = 30 agility => (x2) => 60 agility] During the active ability, this item cannot be dropped or stolen.",
      availability:
        "In the inventory of one character, can only have one pair of Mercury Boots.",
    },
    onWear: (character) => {
      character.currentAgility += 3;
    },
    onRemove: (character) => {
      character.currentAgility -= 3;
    },
  },
  {
    nameRu: "Зелье здоровья",
    nameEn: "Healing Potion",
    image: "healingPotion.png",
    shopType: "Лаборатория",
    price: 3000,
    currency: "mana",
    type: "item",
    descriptionRu: "При использовании восстанавливает 300 НР обладателю зелья.",
    descriptionEn: "When used, restores 300 HP to the owner of the potion.",
  },
  {
    nameRu: "Зелье ускорения",
    nameEn: "Speed Potion",
    image: "speedPotion.png",
    shopType: "Лаборатория",
    price: 2000,
    currency: "mana",
    type: "item",
    isSingleUse: true,
    effect: (character) => agilityBoost(character, {
      amount: character.currentAgility,
      duration: 3,
      name: "Зелье ускорения",
      description: "Увеличивает ловкость персонажа в два раза на 3 хода",
    }),
    descriptionRu:
      "Длительность: 3 хода При использовании удваивает ловкость обладателя зелья. После использования эффект нельзя отменить.",
    descriptionEn:
      "Duration: 3 turns. When used, doubles the agility of the owner. After using the effect cannot be canceled.",
  },
  {
    nameRu: "Зелье отравления",
    nameEn: "Poison Potion",
    image: "poison.png",
    shopType: "Лаборатория",
    price: 3000,
    throwable: true,
    currency: "mana",
    type: "item",
    stats: {
      range: 3,
      zoneColor: "rgb(76, 248, 243)",
      affiliation: "negative only",
      effect: (affectedCharacters) => {
      },
    },
    descriptionRu:
      "Атака: Урон: 100*3 Тип: область Радиус: 2 клетки Длительность: 3 хода/6 ходов. Дальность: дальность персонажа. Описание: При использовании выкидывается на дальность персонажа и на 6 ходов создаёт ядовитую область попав в которую получишь необратимый эффект яда, наносящий 100 урона/ход в течении 3 ходов. Примечание: не работает на летающие объекты. Примечание 2: однажды получивший урон от зелья отравления персонаж, получает иммунитет от этого зелья до конца игры (при воскрешении или перерождении - сбрасывается)",
    descriptionEn:
      "Attack: Damage: 100*3 Type: area Radius: 2 cells Duration: 3 turns/6 turns. Range: character's range. Description: When used, throws on the range of the character and for 6 turns creates a poisonous area. If you get into it, you will receive an irreversible poison effect, which deals 100 damage/turn for 3 turns. Note: does not work on flying objects. Note 2: once a character receives damage from the poison potion, they receive immunity from this potion until the end of the game (upon resurrection or reincarnation - resets)",
  },
  {
    nameRu: "Зелье маны",
    nameEn: "Mana Potion",
    image: "manaPotion.png",
    shopType: "Лаборатория",
    price: 100,
    currency: "HP",
    type: "item",
    descriptionRu:
      "При использовании добавляет: 3000 маны (Долина красных рек) 1000 маны (Поля Пикси, Руины города Артафен) Может превышать лимит. Например: Гигант: 1000 маны (играет на Поле Пикси) Гигант использует зелье маны => Мана: 2000/1000 => Гигант покупает стены (1500 маны) => Мана: 500/1000.",
    descriptionEn:
      "When used, adds: 3000 mana (Red River Valley) 1000 mana (Pixie Fields, Artafen Ruins). Can exceed the limit. For example: Giant: 1000 mana (plays on Pixie Fields) Giant uses the mana potion => Mana: 2000/1000 => Giant buys walls (1500 mana) => Mana: 500/1000.",
  },
  {
    nameRu: "Зелье магического удара молнии",
    nameEn: "Potion of Magic Strike",
    image: "potionOfMagicStrike.png",
    shopType: "Лаборатория",
    price: 7000,
    currency: "mana",
    type: "item",
    descriptionRu:
      "Атака: Урон: 1/2 от Макс.НР жертвы Тип: точка Дальность: дальность персонажа Описание: При использовании бьёт по клетке на которую бросили и снимает 50% от максимального НР существа или вражеской постройки на этой клетке. Работает на базе. При наличии брони, снимает 2 брони, как магический урон.",
    descriptionEn:
      "Attack: Damage: 1/2 of the Max HP of the victim Type: point Range: character's range Description: When used, hits the cell on which it was thrown and removes 50% of the maximum HP of the creature or enemy building on that cell. Works on the base. If there is armor, it removes 2 armor, as a magical damage.",
  },
  {
    nameRu: "Зелье воскрешения",
    nameEn: "Potion of Resurrection",
    image: "potionOfRevival.png",
    shopType: "Лаборатория",
    price: 100,
    currency: "mana",
    type: "item",
    descriptionRu:
      "При использовании воскрешает последнего убитого союзника и отправляет его на союзную базу.",
    descriptionEn:
      "When used, revives the last killed ally and sends him to the allied base.",
  },
  {
    name: "Броня",
    image: "armor.png",
    shopType: "Оружейная",
    price: 500,
    currency: "mana",
    type: "wearable",
    descriptionRu:
      "При покупке добавляет +1 к значению брони покупателя. Максимум брони на персонаже 5. Если у персонажа 5 брони, новую броню нельзя купить.",
    descriptionEn:
      "When purchased, adds +1 to the value of the buyer's armor. The maximum armor on the character is 5. If the character has 5 armor, a new armor cannot be purchased.",
  },
  {
    nameRu: "Турель",
    nameEn: "Turret",
    image: "tourel.png",
    shopType: "Оружейная",
    price: 6000,
    currency: "mana",
    type: "building",
    descriptionRu:
      'При использовании создаёт союзную постройку "Турель": НР: ∞ Урон (пассив.): 100 (тех.) Тип: область Примечание: Как обычно, постройку можно возводить в любой точке на союзной половине карты кроме синего квадрата, область может заходить на вражескую территорию но не может в красный квадрат. Эта постройка не наносит урон другим постройкам.',
    descriptionEn:
      'When used, creates an allied building "Turret": HP: ∞ Damage (passive): 100 (tech). Type: area Note: As usual, the building can be built in any point on the allied half of the map except the blue square, the area can go on the enemy territory but not in the red square. This building does not deal damage to other buildings.',
  },
  {
    nameRu: "Башня лучников",
    nameEn: "Archers Tower",
    image: "archersTower.png",
    shopType: "Оружейная",
    price: 4000,
    currency: "mana",
    type: "building",
    descriptionRu:
      'При использовании ставит союзную постройку "Башня лучников": НР: 750 Урон (пассив.): 75/150. (тех.) Тип: точка Примечание: так как на башне находятся 2 лучника, каждый из которых наносит урон 75 (тех.), то, если в радиусе действия башни лучников есть 2 противника, каждому нанесётся по 75 (тех.) урона, если 1 противник, ему нанесётся 150 (тех.) урона (75*2), если же 3+ то игрок выбирает каким двум персонажам нанести урон. Примечание 2: Башня лучников заменяет собой стену, будь она изначальная или купленная, за неимением возможности снимать с поля изначальные стены мы обычно принебрегаем этим фактом. И тем не менее, если башня лучников была поставлена на покупную стену, то, после её уничтожения убирайте стену поставленную под башней. Примечание 3: Как обычно, постройку можно возводить на союзной половине карты кроме синего квадрата, область может заходить на вражескую территорию но не в красный квадрат. Постройка не наносит урон другим постройкам.',
    descriptionEn:
      "When used, creates an allied building 'Archers Tower': HP: 750 Damage (passive): 75/150 (tech). Type: point Note: Since there are 2 archers on the tower, each of which deals 75 (tech) damage, if there are 2 opponents in the area of the tower's action, each will receive 75 (tech) damage, if 1 opponent, he will receive 150 (tech) damage (75*2), if 3+ then the player chooses which two characters to damage. Note 2: The Archers Tower replaces the wall, whether it is the original or purchased, due to the inability to remove the original walls, we usually ignore this fact. However, if the Archers Tower was built on a purchased wall, then, after its destruction, remove the wall built under the tower. Note 3: As usual, the building can be built on the allied half of the map except the blue square, the area can go on the enemy territory but not in the red square. The building does not deal damage to other buildings.",
  },
  {
    nameRu: "Стена (х3)",
    nameEn: "Wall (x3)",
    image: "wall.png",
    shopType: "Оружейная",
    price: 1500,
    currency: "mana",
    type: "building",
    stats: {
      HP: 750,
      Урон: 0,
      Мана: 0,
      Ловкость: 0,
      Броня: 0,
      Дальность: 0,
    },
    currentHP: 750,
    descriptionRu:
      "НР: 750 После покупки добавляет в один слот инвентаря покупателя 3 стены. Примечание: При использовании на своей территории можно ставить на любую дальность, в пределах синего квадрата. При использовании на вражеской территории, можно ставить только на свою дальность. За раз можно поставить все стены. Примечание 2: Стена - нейтральная постройка.",
    descriptionEn:
      "HP: 750 After purchase, adds 3 walls to the inventory slot of the buyer. Note: When used on your own territory, you can place it at any range, within the blue square. When used on enemy territory, you can only place it at your range. You can place all walls at once. Note 2: The wall is a neutral building.",
  },
  {
    nameRu: "Усиление урона",
    nameEn: "Damage Boost",
    image: "damageBoost.png",
    shopType: "Оружейная",
    price: "100%",
    currency: "mana",
    type: "wearable",
    descriptionRu: "При покупке повышает значение урона покупателя на 50.",
    descriptionEn: "When purchased, increases the value of the buyer's damage by 50.",
  },
  {
    nameRu: "Повозка",
    nameEn: "Cart",
    image: "povozka.png",
    shopType: "Оружейная",
    price: 3000,
    currency: "mana",
    type: "building",
    descriptionRu:
      'Создаёт нейтральную постройку "Повозка": НР: 100 Броня: 2 Ловкость: 6 Можно перемещать по наличии персонажа сидящего на "коне". Перемещение телеги считается за перемещение. Залезть на коня или телегу: действие. Слезть - перемещение.',
    descriptionEn:
      "Creates a neutral building 'Cart': HP: 100 Armor: 2 Agility: 6 Can be moved if there is a character sitting on the 'horse'. Moving the cart counts as moving. Getting on the horse or cart: action. Getting off: movement.",
  },
  {
    nameRu: "Лазарет",
    nameEn: "Lazaret",
    image: "lazaret.png",
    shopType: "Оружейная",
    price: 3000,
    currency: "mana",
    type: "building",
    descriptionRu:
      'При использовании ставит нейтральную постройку "Лазарет": НР: 500 Броня: 1 Лечит персонажей обеих команд находящихся в радиусе 1 от Лазарета. 50НР/ход. Восстановление Лазарета не снимает негативные эффекты. Можно разобрать, при действии два хода подряд (можно разными персонажами). На лазарет нельзя становиться. Примечание: Если при последнем действии в радиусе только союзники, то игрок сам выбирает кому в инвентарь отправится Лазарет. Если же союзник и враг, то Лазарет отправляется последнему кто действовал на Лазарет. Примечание 2: При разборке Лазарета, его эффект не работает.',
    descriptionEn:
      "Creates a neutral building 'Lazaret': HP: 500 Armor: 1 Heals characters of both teams located within 1 of the Lazaret. 50 HP/turn. The restoration of the Lazaret does not remove negative effects. Can be dismantled, two moves in a row (can be different characters). You cannot stand on the Lazaret. Note: If, at the last action, there are only allies in the radius, then the player himself chooses who will be sent to the inventory of the Lazaret. If there is a friend and an enemy, then the Lazaret is sent to the last person who acted on the Lazaret. Note 2: When dismantling the Lazaret, its effect does not work.",
  },
  {
    nameRu: "Шахта",
    nameEn: "Mine",
    image: "mine.png",
    shopType: "Оружейная",
    price: 3000,
    currency: "mana",
    type: "building",
    descriptionRu:
      'При использовании ставит нейтральную постройку "Шахта": НР: 750 Броня: 0 Добавляет команде поставившей шахту, 10 золота/ход. Шахту можно ставить только на своей территории, вне синего квадрата. На шахту нельзя становиться. Примечание: Золото, добытое шахтой, автоматически отправляется на "счёт" команды.',
    descriptionEn:
      "When used, creates a neutral building 'Mine': HP: 750 Armor: 0 Adds 10 gold to the team that built the mine per turn. The mine can only be built on its own territory, outside the blue square. You cannot stand on the mine. Note: The gold mined by the mine is automatically sent to the 'account' of the team.",
  },
  {
    nameRu: "Зелье заморозки",
    nameEn: "Potion of Frost",
    image: "potionOfFrost.png",
    shopType: "Лаборатория",
    price: 3000,
    currency: "mana",
    throwable: true,
    stats: {
      range: 3,
      zoneColor: "rgb(76, 248, 243)",
      affiliation: "negative only",
      effect: (affectedCharacters) => {
      },
    },
    type: "item",
    descriptionRu:
      "При разбитии мгновенно поражает область с радиусом 3 клетки вокруг себя. В этой области, вражеские персонажи и вражеские постройки замерзают на 3 хода (Невозможно перемещаться и действовать). Вражеским персонажам при этом наносится 50 (физ.) урона/ход (сквозь броню), в течении 3 ходов. Это считается за негативный эффект, который можно развеять.",
    descriptionEn:
      "When used, instantly strikes an area with a radius of 3 cells around itself. In this area, enemy characters and enemy buildings freeze for 3 turns (Cannot move and act). Enemy characters are dealt 50 (physical) damage/turn (through armor) for 3 turns. This counts as a negative effect that can be dispelled.",
  },
  {
    nameRu: "Дымовая шашка",
    nameEn: "Smoke Shaker",
    image: "smoke.png",
    shopType: "Оружейная",
    price: 1000,
    currency: "mana",
    throwable: true,
    type: "item",
    descriptionRu:
      "Дымовая шашка бросается на свою дальность. Но если Ваша дальность меньше 5, Вы можете бросить шашку на дальность больше или равна 5. Образует вокруг себя область с радиусом 4 клетки, в которой плотный дым отнимает половину от ловкости всех персонажей, делает дальность всех персонажей = 1, обычный промах = 50%. Действует дымовая шашка в течении 3-х ходов. Примечание: Промах бросается атакующим персонажем если хотя бы один из участников битвы находится в дыму. Примечание 2: Эффект дыма - негативный, но не может быть развеян способностью или зельями. Примечание 3: На дымовой шашке можно стоять.",
    descriptionEn:
      "The Smoke Shaker is thrown at its range. But if your range is less than 5, you can throw the shaker at a range greater than or equal to 5. Creates an area with a radius of 4 cells around itself, in which dense smoke reduces the agility of all characters by half, makes the range of all characters = 1, normal miss = 50%. The Smoke Shaker effect lasts for 3 turns. Note: The miss is thrown by the attacking character if at least one participant in the battle is in the smoke. Note 2: The smoke effect is negative, but cannot be dispelled by a skill or potions. Note 3: You can stand on the Smoke Shaker.",
  },
  {
    nameRu: "Таран",
    nameEn: "Ram",
    image: "taran.png",
    shopType: "Оружейная",
    price: 2000,
    currency: "mana",
    type: "building",
    descriptionRu:
      'Ставит нейтральную постройку "Таран": НР: 500 Броня: 0. Таран - постройка 2х1 клетки, наносящая повышенный урон постройкам. Можно двигать только персонажами "Танками". Для управления тараном, танк должен подойти на расстояние 1 клетка и действовать на него. К тарану могут прикрепиться несколько танков одной команды. В таком случае, ловкость тарана = минимальная начальная ловкость среди группы танков, управляющей тараном. Урон по постройкам от тарана = сумма урона всех участников группы х 1.5. Не може быть использована на призываемых существах и телеге.',
    descriptionEn:
      "Creates a neutral building 'Ram': HP: 500 Armor: 0. The Ram is a 2x1 building that deals increased damage to buildings. It can only be moved by 'Tanks'. To control the ram, the tank must approach it at a distance of 1 cell and act on it. Several tanks of the same team can attach to the ram. In this case, the agility of the ram = the minimum initial agility among the group of tanks controlling the ram. The damage to buildings from the ram = the sum of the damage of all participants in the group x 1.5. Cannot be used on summoned creatures and the cart.",
  },
  {
    nameRu: "Сфера маны",
    nameEn: "Mana Sphere",
    image: "sferaMani.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        "Сфера маны восстанавливает персонажу-носителю 100 маны/ход. Больше лимита восстановить не может.",
      activeAbility:
        "Цена: 10 ходов. В течении 5 ходов, Сфера маны восстанавливает хозяину 250 маны/ход. Больше лимита не восстанавливает. Пока активная способность действует, сбросить или украсть Сферу нельзя.",
      availability:
        "В инвентаре одного персонажа может находиться не более одной Сферы маны.",
    },
    descriptionEn: {
      passiveAbility:
        "Mana Sphere restores 100 mana to the character-owner per turn. Cannot restore more than the limit.",
      activeAbility:
        "Price: 10 turns. For 5 turns, the Mana Sphere restores 250 mana to the owner per turn. Cannot restore more than the limit. While the active ability is active, the Mana Sphere cannot be dropped or stolen.",
      availability:
        "In the inventory of one character, can only have one pair of Mana Sphere.",
    },
  },
  {
    nameRu: "Молот огра",
    nameEn: "Ogr Hammer",
    image: "molotOgra.png",
    shopType: "Магический",
    price: 300,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility:
        'Урон обычных атак персонажа ближнего боя (изначальная дальность = от 1 до 3) +50. При этом, при ношении в инвентаре Молота огра, от тяжести, у персонажа-носителя отнимается 1 ловкость. Негативный эффект не распространяется на персонажей с типом "Танк". Примечание: Атаки с эффектом Молота огра всегда наносят физический урон.',
      activeAbility: null,
      availability:
        "В инвентаре одного персонажа может находиться не более одного Молота огра.",
    },
    descriptionEn: {
      passiveAbility:
        "The damage of the character-owner's normal attacks (initial range = from 1 to 3) +50. At the same time, when wearing the Ogr Hammer, the character-owner's agility is reduced by 1. This negative effect does not apply to characters with the 'Tank' type. Note: The attacks with the effect of the Ogr Hammer always deal physical damage.",
      activeAbility: null,
      availability:
        "In the inventory of one character, can only have one pair of Ogr Hammer.",
    },
  },
  {
    nameRu: "Пространственная перчатка",
    nameEn: "Spatial Glove",
    image: "prostranstvennayaPerchatka.png",
    shopType: "Магический",
    price: 400,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Цена: 10 ходов. Пространственная перчатка позволяет переместить предмет из инвентаря персонажа-носителя в инвентарь любого союзника на карте. Примечание: Себя, пространственная перчатка переместить не может. Примечание 2: Можно переместить только один предмет за раз (или же все предметы из одной ячейки). Примечание 3: Нельзя переместить предметы из рюкзака, но можно переместить рюкзак с предметами.",
      availability:
        "В инвентаре одного персонажа может находиться сколько угодно Пространственных перчаток.",
    },
    descriptionEn: {
      passiveAbility: null,
      activeAbility:
        "Price: 10 turns. The Spatial Glove allows you to move an item from the character-owner''s inventory to the inventory of any ally on the map. Note: The Spatial Glove cannot be moved to yourself. Note 2: Only one item can be moved at a time (or all items from one cell). Note 3: You cannot move items from the backpack, but you can move the backpack with items.",
      availability:
        "In the inventory of one character, can only have one pair of Spatial Glove.",
    },
  },
  {
    nameRu: "Тёмный пакт",
    nameEn: "Dark Pact",
    image: "darkPakt.png",
    shopType: "Магический",
    price: 300,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        'Цена: единоразовая активация предмета. После покупки Тёмного пакта, между носителем и предметом образуется связь "Тёмный пакт". Таким образом, если связь Тёмного пакта выполнена и предмет находится в инвентаре персонажа с кем был заключён "Тёмный пакт" персонажу даётся сила предмета: Теперь каждая обычная атака персонажа-носителя может быть усилена за счёт его НР (-2 НР = +1 урон). Так, чтобы выполнить усиленную атаку (повышенную на 50 урона), персонажу придётся отдать свои собственные 100 НР. Имейте ввиду, усиление даётся не навсегда, а лишь на следующую атаку. Такое усиление не считается за действие. После смерти персонажа, с которым был подписан "Тёмный пакт", предмет уничтожается. Одновременно не может существовать более одного контракта подписанного с конкретным персонажем.',
      availability: null,
    },
    descriptionEn: {
      passiveAbility: null,
      activeAbility:
        "Price: one-time activation of the item. After purchasing the Dark Pact, a connection 'Dark Pact' is formed between the owner and the item. Thus, if the Dark Pact connection is completed and the item is in the inventory of a character with whom the 'Dark Pact' was concluded, the item gives the owner the following power: Now each normal attack of the character-owner can be enhanced by his own HP (-2 HP = +1 damage). Thus, to perform an enhanced attack (increased by 50 damage), the character-owner will have to give his own 100 HP. Keep in mind that the enhancement is not permanent, but only for the next attack. Such enhancement is not considered an action. After the character with whom the 'Dark Pact' was concluded dies, the item is destroyed. At the same time, only one contract can exist at a time with a specific character.",
      availability:
        "In the inventory of one character, can only have one pair of Dark Pact.",
    },
  },
  {
    nameRu: "Свиток пиромантии",
    nameEn: "Pyro Scroll",
    image: "pyroScroll.png",
    shopType: "Магический",
    price: 200,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Атака: Цена: одноразовая. Урон: 200 (физ.) Тип: область. Радиус: 3 клетки. Можно кидать на свою дальность. Поджигает область с радиусом 3 вокруг себя и наносит мгновенный урон: 200 (физ.) урона.",
      availability:
        "В инвентаре одного персонажа может находиться сколько угодно Свитков пиромантии.",
    },
    descriptionEn: {
      passiveAbility: null,
      availability: "In the inventory of one character, can only have one pair of Pyro Scroll.",
      activeAbility:
        "Price: one-time activation of the item. After purchasing the Pyro Scroll, a connection 'Pyro Scroll' is formed between the owner and the item. Thus, if the Pyro Scroll connection is completed and the item is in the inventory of a character with whom the 'Pyro Scroll' was concluded, the item gives the owner the following power: Now each normal attack of the character-owner can be enhanced by his own HP (-2 HP = +1 damage). Thus, to perform an enhanced attack (increased by 50 damage), the character-owner will have to give his own 100 HP. Keep in mind that the enhancement is not permanent, but only for the next attack. Such enhancement is not considered an action. After the character with whom the 'Pyro Scroll' was concluded dies, the item is destroyed. At the same time, only one contract can exist at a time with a specific character.",
    },
  },
  {
    nameRu: "Свиток чар",
    nameEn: "Char Scroll",
    image: "charScroll.png",
    shopType: "Магический",
    price: 200,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Атака: Цена: одноразовая. Урон: 150 (маг.) Тип: точка. Дальность: 7 клеток.",
      availability:
        "В инвентаре одного персонажа может находиться сколько угодно Свитков чар.",
    },
    descriptionEn: {
      passiveAbility: null,
      availability: "In the inventory of one character, can only have one pair of Char Scroll.",
      activeAbility:
        "Price: one-time activation of the item. After purchasing the Char Scroll, a connection 'Char Scroll' is formed between the owner and the item. Thus, if the Char Scroll connection is completed and the item is in the inventory of a character with whom the 'Char Scroll' was concluded, the item gives the owner the following power: Now each normal attack of the character-owner can be enhanced by his own HP (-2 HP = +1 damage). Thus, to perform an enhanced attack (increased by 50 damage), the character-owner will have to give his own 100 HP. Keep in mind that the enhancement is not permanent, but only for the next attack. Such enhancement is not considered an action. After the character with whom the 'Char Scroll' was concluded dies, the item is destroyed. At the same time, only one contract can exist at a time with a specific character.",
    },
  },
  {
    nameRu: "Свиток чудес",
    nameEn: "Wonder Scroll",
    image: "wonderScroll.png",
    shopType: "Магический",
    price: 200,
    currency: "gold",
    type: "item",
    descriptionRu: {
      passiveAbility: null,
      activeAbility:
        "Цена: одноразовая. Можно использовать на свою дальность. В области с радиусом 3 вокруг себя, Свиток чудес мгновенно восстанавливает союзникам по 200 НР. Только союзным персонажам. После использования исчезает.",
      availability:
        "В инвентаре одного персонажа может находиться сколько угодно Свитков чудес.",
    },
    descriptionEn: {
      passiveAbility: null,
      availability: "In the inventory of one character, can only have one pair of Wonder Scroll.",
      activeAbility:
        "Price: one-time activation of the item. After purchasing the Wonder Scroll, a connection 'Wonder Scroll' is formed between the owner and the item. Thus, if the Wonder Scroll connection is completed and the item is in the inventory of a character with whom the 'Wonder Scroll' was concluded, the item gives the owner the following power: Now each normal attack of the character-owner can be enhanced by his own HP (-2 HP = +1 damage). Thus, to perform an enhanced attack (increased by 50 damage), the character-owner will have to give his own 100 HP. Keep in mind that the enhancement is not permanent, but only for the next attack. Such enhancement is not considered an action. After the character with whom the 'Wonder Scroll' was concluded dies, the item is destroyed. At the same time, only one contract can exist at a time with a specific character.",
    },
  },
];
