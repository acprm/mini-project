// import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonSlice';
import typesReducer from "./reducers/typesSlice";
import abilitiesReducer from "./reducers/abilitiesSlice"
import movesReducer from "./reducers/movesSlice"

export const store = configureStore({
    reducer:{
        pokemon: pokemonReducer,
        types: typesReducer,
        abilities: abilitiesReducer,
        moves: movesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch