// import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './reducers/pokemon';

const store = configureStore({
    reducer:{
        pokemon: pokemonSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export const selectPokemon = (state:RootState)=> state.pokemon.pokemons;

export default store