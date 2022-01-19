import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonState } from "../../type";

const initialState: PokemonState={
    pokemons:[{fav:'test'}]
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
                    pokemons: state.pokemons.push(action.payload)
                })
            }
        }
    }
)

export const {clearPokemonList, addPokemonList} = pokemonSlice.actions
