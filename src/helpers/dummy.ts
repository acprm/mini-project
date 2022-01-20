export interface PokemonDummyItem{
    name: string,
    imgUrl: string,
    url: string,
    id: string,
    type: string[],
}

export interface MoveDummyItem{
    name: string,
    types: string[]
}

export interface AbilityDummyItem{
    name:string
}

export const pokemonDummy:PokemonDummyItem[] = [
    {name:'charizard', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', url:'https://pokeapi.co/api/v2/pokemon/charizard', id:'001', type: ['fire', 'flying']},
    {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', id:'002', type:['water']},
    {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', id:'003', type:['ice','flying']}
]

export const moveDummy:MoveDummyItem[] = [
    {name: 'Fire Punch', types:['fire']},
    {name: 'Psychic', types:['psychic']},
    {name: 'Crunch', types:['dark']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
    {name: 'Double Kick', types:['fighting']},
]

export const abilityDummy:AbilityDummyItem[] = [
    {name: 'Solar Blessing'},
    {name: 'Blaze'},
    {name: 'Tiny'},
    {name: 'Double Team'}
]
