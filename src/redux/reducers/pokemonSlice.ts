import {DataMin, Status} from "../../type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Minimum Data for Pokemon
export interface PokemonMin extends DataMin {
    types: string[]
    sprite: string
}

export interface PokemonDetail extends PokemonMin {
    stats: PokemonStat[]
    moves: number[]
    abilities: DataMin[]
}

export type PokemonStat = {
    statName: string,
    baseStat: number,
    maxStat?: number,
}

export interface PokemonState {
    list: PokemonDetail[]
    status: Status
}

const initialState: PokemonState = {
    list: [],
    status: "idle"
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers:{

            clearPokemonList(state: PokemonState){
                Object.assign(state, {
                    ...state,
                    pokemons:[]
                })
            },

            addPokemonList(state: PokemonState, action: PayloadAction<Object>){
                Object.assign(state, {
                    ...state,
                })
            }
        }
    }
)

export const {clearPokemonList, addPokemonList} = pokemonSlice.actions
