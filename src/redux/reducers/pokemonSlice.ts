import {DataMin, Status} from "../../type";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
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

export type PokemonGen = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII"

export interface Page {
    generation: PokemonGen
    firstId: number,
    lastId: number,
    nextId: number,
    limit: number
}

export interface PokemonState {
    list: PokemonDetail[]
    page: Page
    status: Status
}

const initialState: PokemonState = {
    list: [],
    page: {
        generation: "I",
        firstId: 1,
        lastId: 151,
        limit: 18, // Change the nextId too if you change the limit
        nextId: 19, // nextId = firstId + limit
    },
    status: "idle"
}

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => {
        const result = await getData("pokemon", id, lastId, limit)
        return result as unknown as PokemonDetail[]
    }
)

export const fetchMorePokemon = createAsyncThunk(
    'pokemon/fetchMorePokemon',
    async ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => {
        const result = await getData("pokemon", id, lastId, limit)
        return result as unknown as PokemonDetail[]
    }
)

export const pokemonSlice = createSlice({
        name: 'pokemon',
        initialState,
        reducers: {
            setPokemonIdle(state) {
                state.status = 'idle'
            },
            setNextId(state, action: PayloadAction<number>) {
                state.page.nextId = action.payload
            },
            changeGeneration: (state, action: PayloadAction<PokemonGen>) => {
                switch (action.payload) {
                    case "I": {
                        state.page = {
                            ...state.page,
                            generation: "I",
                            firstId: 1,
                            lastId: 151,
                            nextId: state.page.limit + 1
                        }
                        break
                    }
                    case "II": {
                        state.page = {
                            ...state.page,
                            generation: "II",
                            firstId: 152,
                            lastId: 251,
                            nextId: state.page.limit + 152
                        }
                        break
                    }
                    case "III": {
                        state.page = {
                            ...state.page,
                            generation: "III",
                            firstId: 252,
                            lastId: 386,
                            nextId: state.page.limit + 252
                        }
                        break
                    }
                    case "IV": {
                        state.page = {
                            ...state.page,
                            generation: "IV",
                            firstId: 387,
                            lastId: 493,
                            nextId: state.page.limit + 387
                        }
                        break
                    }
                    case "V": {
                        state.page = {
                            ...state.page,
                            generation: "V",
                            firstId: 494,
                            lastId: 649,
                            nextId: state.page.limit + 494
                        }
                        break
                    }
                    case "VI": {
                        state.page = {
                            ...state.page,
                            generation: "VI",
                            firstId: 650,
                            lastId: 721,
                            nextId: state.page.limit + 650
                        }
                        break
                    }
                    case "VII": {
                        state.page = {
                            ...state.page,
                            generation: "VII",
                            firstId: 722,
                            lastId: 809,
                            nextId: state.page.limit + 722
                        }
                        break
                    }
                    case "VIII": {
                        state.page = {
                            ...state.page,
                            generation: "VIII",
                            firstId: 810,
                            lastId: 898,
                            nextId: state.page.limit + 810
                        }
                        break
                    }
                }
            }
        },
        extraReducers: builder => {
            builder
                .addCase(fetchPokemon.pending, (state) => {
                    state.status = "loading"
                })
                .addCase(fetchPokemon.fulfilled, (state, {payload}) => {
                    const newState: PokemonState = {
                        ...state,
                        list: payload,
                        status: "idle"
                    }
                    return newState
                })
                .addCase(fetchPokemon.rejected, state => {
                    state.status = "failed"
                })
                // Fetch More Pokemon
                .addCase(fetchMorePokemon.pending, (state) => {
                    state.status = "loading"
                })
                .addCase(fetchMorePokemon.fulfilled, (state, {payload}) => {
                    state.list.push(...payload)
                    state.status = "idle"
                })
                .addCase(fetchMorePokemon.rejected, state => {
                    state.status = "failed"
                })
        }
    }
)

export const {changeGeneration, setPokemonIdle, setNextId} = pokemonSlice.actions
export default pokemonSlice.reducer
