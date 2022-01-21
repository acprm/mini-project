interface PokemonDummyItem{
    name: string,
    imgUrl: string,
    url: string,
    id: number,
    type: number[],
}

interface MoveDummyItem{
    name: string,
    types: number[],
    accuracy: number,
    power: number,
    pp: number,
    shortDescription: string,
    description: string,
    id:number
}

interface AbilityDummyItem{
    name:string;
    shortDescription:string;
    description:string;
    id:number
}

export const pokemonDummy:PokemonDummyItem[] = [
    {name:'charizard', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', url:'https://pokeapi.co/api/v2/pokemon/charizard', id:1, type: [10, 3]},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:[11]},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:[15,3]},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:[11]},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:[15,3]},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:[11]},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:[15,3]},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:2, type:[11]},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:3, type:[15,3]},
]

export const moveDummy:MoveDummyItem[] = [
    {name: 'Fire Punch', types:[10],
    accuracy: 100, power: 75, pp: 25,
    description: "Inflicts regular damage. Has a 25% chance to burn the target.",
    shortDescription: "Has a 25% chance to burn the target.",
    id: 1
    },
    {name: 'Psychic', types:[14],
    accuracy: 80, power: 95, pp: 15,
    description: "Inflicts regular damage. Has a $effect_chance% chance to lower the target's Special Defense by one stage",
    shortDescription: "Has a $effect_chance% chance to lower the target's Special Defense by one stage.",
    id: 2
    },
    {name: 'Crunch', types:[17],
    accuracy:100, power: 60, pp:30,
    description: "Inflicts regular damage. Has a $effect_chance% chance to lower the target's Defense by one stage",
    shortDescription:"Has a $effect_chance% chance to lower the target's Defense by one stage.",
    id: 3
    },
    {name: 'Solar Beam', types:[12],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:[12],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:[12],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:[12],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:[12],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    {name: 'Solar Beam', types:[12],
    accuracy:95, power:150, pp:10,
    description: "Inflicts regular damage. User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
    shortDescription: "Requires a turn to charge before attacking.",
    id: 4
    },
    ]

export const abilityDummy:AbilityDummyItem[] = [
    {name: 'Solar Blessing', id:1, shortDescription: "Blessing from the sun", description:"Powers up on sunlight"},
    {name: 'Blaze', id:2, shortDescription:"Burns foe", description:"Attacks have a chance of burning"},
    {name: 'Tiny', id:3, shortDescription:"Doubles evasion", description:"Makes body seem smaller, increasing evasiveness"},
    {name: 'Double Team', id:4, shortDescription:"Triples evasion", description:"Moves quicker than the light, increasing evasiveness"}
]

export interface TypeDummy{
    name:string;
    id:number;
    double_damage_from: Array<{name: number, url:string}>;
    double_damage_to: Array<{name:number, url:string}>;
    half_damage_from: Array<{name:number, url:string}>;
    half_damage_to: Array<{name:number, url:string}> | any
    no_damage_from: Array<{name:number, url:string}> | any
    no_damage_to: Array<{name:number, url:string}> | any
}
export const typeDummy:TypeDummy[] = [
    {
        name:"flying",
        id: 3,
        "double_damage_from": [
            {
                "name": 6,
                "url": "https://pokeapi.co/api/v2/type/6/"
            },
            {
                "name": 13,
                "url": "https://pokeapi.co/api/v2/type/13/"
            },
            {
                "name": 15,
                "url": "https://pokeapi.co/api/v2/type/15/"
            }
        ],
        "double_damage_to": [
            {
                "name": 2,
                "url": "https://pokeapi.co/api/v2/type/2/"
            },
            {
                "name": 7,
                "url": "https://pokeapi.co/api/v2/type/7/"
            },
            {
                "name": 12,
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        ],
        "half_damage_from": [
            {
                "name": 2,
                "url": "https://pokeapi.co/api/v2/type/2/"
            },
            {
                "name": 7,
                "url": "https://pokeapi.co/api/v2/type/7/"
            },
            {
                "name": 12,
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        ],
        "half_damage_to": [
            {
                "name": 6,
                "url": "https://pokeapi.co/api/v2/type/6/"
            },
            {
                "name": 9,
                "url": "https://pokeapi.co/api/v2/type/9/"
            },
            {
                "name": 13,
                "url": "https://pokeapi.co/api/v2/type/13/"
            }
        ],
        "no_damage_from": [
            {
                "name": 5,
                "url": "https://pokeapi.co/api/v2/type/5/"
            }
        ],
        "no_damage_to": []
    }
]