interface PokemonDummyItem{
    name: string,
    imgUrl: string,
    url: string,
    id: number,
    type: string[],
}

interface MoveDummyItem{
    name: string,
    types: string[],
    accuracy: number,
    power: number,
    pp: number,
    shortDescription: string,
    description: string,
    id:number
}

interface AbilityDummyItem{
    name:string;
    id:number
}

export const pokemonDummy:PokemonDummyItem[] = [
    {name:'charizard', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', url:'https://pokeapi.co/api/v2/pokemon/charizard', id:1, type: ['fire', 'flying']},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:['water']},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:['ice','flying']},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:['water']},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:['ice','flying']},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:['water']},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:['ice','flying']},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:['water']},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:['ice','flying']},
]

export const moveDummy:MoveDummyItem[] = [
    {name: 'Fire Punch', types:['fire'],
    accuracy: 100, power: 75, pp: 25,
    description: "Inflicts regular damage. Has a 25% chance to burn the target.",
    shortDescription: "Has a 25% chance to burn the target.",
    id: 1
    },
    {name: 'Psychic', types:['psychic'],
    accuracy: 80, power: 95, pp: 15,
    description: "Inflicts regular damage. Has a $effect_chance% chance to lower the target's Special Defense by one stage",
    shortDescription: "Has a $effect_chance% chance to lower the target's Special Defense by one stage.",
    id: 2
    },
    {name: 'Crunch', types:['dark'],
    accuracy:100, power: 60, pp:30,
    description: "Inflicts regular damage. Has a $effect_chance% chance to lower the target's Defense by one stage",
    shortDescription:"Has a $effect_chance% chance to lower the target's Defense by one stage.",
    id: 3
    },
    {name: 'Solar Beam', types:['grass'],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:['grass'],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:['grass'],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:['grass'],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:['grass'],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:['grass'],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    ]

export const abilityDummy:AbilityDummyItem[] = [
    {name: 'Solar Blessing', id:1},
    {name: 'Blaze', id:2},
    {name: 'Tiny', id:3},
    {name: 'Double Team', id:4}
]
