import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonSlice';
import typesReducer from "./reducers/typesSlice";
import abilitiesReducer from "./reducers/abilitiesSlice"
import movesReducer from "./reducers/movesSlice"
import modalsReducer from "./reducers/modalsSlice"

export const store = configureStore({
    reducer:{
        pokemon: pokemonReducer,
        types: typesReducer,
        abilities: abilitiesReducer,
        moves: movesReducer,
        modals: modalsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch