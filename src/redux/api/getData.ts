import axios from "axios";
import {DataType} from "../../type";
import {PokemonDetail} from "../reducers/pokemonSlice";
import {getId} from "../../helpers/getId";
import {Ability, Move, Pokemon, Type} from "../../KeyWord";
import {TypeDetail} from "../reducers/typesSlice";
import {MoveDetail} from "../reducers/movesSlice";
import {AbilityDetail} from "../reducers/abilitiesSlice";

export const getData = async (type: DataType, id: number | number[], lastId?: number, limit?: number) => {
    // Create a list of id that will be used as parameter when fetching PokeAPI data
    let idList: number[] = []
    const url = `https://pokeapi.co/api/v2/${type}/`

    if (typeof id === "number") {

        // Use lastId if it exists else only put one item to the idList
        if (lastId) {
            for (let i = id; i <= lastId; i++) {
                idList.push(i)
            }
        } else {
            idList.push(id)
        }
    }
    else {
        idList = [...id]
    }


    // Fetch the data using Promise.all and axios get
    const responses = await Promise.all(idList.map((id) => axios.get(`${url}${id}`)))
    const results = responses.map(res => {
        const data = res.data
        return transformData(type, data)
    })

    if (limit) {
        return results.slice(0, limit)
    }
    return results
}

const transformData = (type: DataType, data: any) => {
    if (type === "pokemon") {
        const transformedData: PokemonDetail = {
            id: data.id,
            name: Pokemon.filter(pokemon => pokemon.id === data.id)[0].name,
            sprite: data.sprites.other["official-artwork"].front_default,
            types: data.types.map((index: any) => getId(index.type.url)).filter((id: number) => id < 1000),
            stats: data.stats.map((index: any) => (
                {
                    statName: index.stat.name,
                    baseStat: index.base_stat,
                }
            )),
            abilities: data.abilities.map((index: any) => (getId(index.ability.url))),
            moves: data.moves.map((index: any) => (getId(index.move.url))).filter((id: number) => id < 1000),
        }

        return transformedData
    }
    if (type === "type") {
        const damageRel = data.damage_relations
        const transformedData: TypeDetail = {
            id: data.id,
            name: Type.filter(type => type.id === data.id)[0].name || data.name,
            offensive: {
                double: (damageRel.double_damage_to == []) ? [] : damageRel.double_damage_to.map((index: any) => getId(index.url)),
                half: (damageRel.half_damage_to == []) ? [] : damageRel.half_damage_to.map((index: any) => getId(index.url)),
                zero: (damageRel.no_damage_to == []) ? [] : damageRel.no_damage_to.map((index: any) => getId(index.url))
            },
            defensive: {
                double: (damageRel.double_damage_from == []) ? [] : damageRel.double_damage_from.map((index: any) => getId(index.url)),
                half: (damageRel.half_damage_from == []) ? [] : damageRel.half_damage_from.map((index: any) => getId(index.url)),
                zero: (damageRel.no_damage_from == []) ? [] : damageRel.no_damage_from.map((index: any) => getId(index.url))
            },
            moves: data.moves.map((index: any) => (getId(index.url))).filter((id: number) => id < 1000),
            pokemon: data.pokemon.map((index: any) => (getId(index.pokemon.url))).filter((id: number) => id < 1000),
        }

        return transformedData
    }
    if (type === "move") {
        const transformedData: MoveDetail = {
            id: data.id,
            name: Move.filter(move => move.id === data.id)[0].name || data.name,
            type: getId(data.type.url) as number,
            shortDescription: data.effect_entries[0].short_effect,
            longDescription: data.effect_entries[0].effect,
            accuracy: data.accuracy,
            pp: data.pp,
            power: (data.power === null) ? 0 : data.power,
            pokemon: data.learned_by_pokemon.map((pokemon: any) => getId(pokemon.url)).filter((id: number) => id < 1000)
        }

        return transformedData
    }
    if (type === "ability") {
        const transformedData: AbilityDetail = {
            id: data.id,
            name: Ability.filter(ability => ability.id === data.id)[0].name || data.name,
            shortDescription: data.effect_entries.filter((index: any) => index.language.name === "en")[0].short_effect,
            longDescription: data.effect_entries.filter((index: any) => index.language.name === "en")[0].effect,
            pokemon: data.pokemon.map((index: any) => getId(index.pokemon.url)).filter((id: number) => id < 1000)
        }

        return transformedData
    }
}