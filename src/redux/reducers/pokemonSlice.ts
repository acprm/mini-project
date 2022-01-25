import {DataMin, Status} from "../../type";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../api/getData";

// Minimum Data for Pokemon
export interface PokemonMin extends DataMin {
    types: number[]
    sprite: string
}

export interface PokemonDetail extends PokemonMin {
    stats: PokemonStat[]
    moves: number[]
    abilities: number[]
}

export type PokemonStat = {
    statName: string,
    baseStat: number,
    maxStat: number,
}

export interface PokemonState {
    list: PokemonDetail[]
    status: Status
}

const initialState: PokemonState = {
    list: [],
    status: "idle"
}

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => {
        const result = await getData("pokemon", id, lastId, limit)
        return result as unknown as PokemonDetail[]
    }
)


export const pokemonSlice = createSlice({
        name: 'pokemon',
        initialState,
        reducers: {
            setPokemonIdle(state){
                state.status = 'idle'
            }
        },
        extraReducers: builder => {
            builder
                .addCase(fetchPokemon.pending, (state) => {
                    state.status = "loading"
                })
                .addCase(fetchPokemon.fulfilled, (state, {payload}) => {
                    const newState: PokemonState = {
                        list: payload,
                        status: "idle"
                    }

                    return newState
                })
                .addCase(fetchPokemon.rejected, state => {
                    state.status = "failed"
                })
        }
    }
)
export const {setPokemonIdle} = pokemonSlice.actions
export default pokemonSlice.reducer
