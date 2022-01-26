import {DataMin, Status} from "../../type";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../api/getData";

export interface AbilityDetail extends DataMin {
    shortDescription: string
    longDescription: string
    pokemon: number[]
}

export interface AbilitiesState {
    list: AbilityDetail[]
    status: Status
}

const initialState: AbilitiesState = {
    list: [],
    status: "idle"
}

export const fetchAbilities = createAsyncThunk(
    'abilities/fetchAbilities',
    async ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => {
        const result = await getData("ability", id, lastId, limit)
        return result as unknown as AbilityDetail[]
    }
)


export const abilitiesSlice = createSlice({
        name: 'abilities',
        initialState,
        reducers: {
            setAbilitiesIdle(state){
                state.status = 'idle'
            }
        },
        extraReducers: builder => {
            builder
                .addCase(fetchAbilities.pending, (state) => {
                    state.status = "loading"
                })
                .addCase(fetchAbilities.fulfilled, (state, {payload}) => {
                    const newState: AbilitiesState = {
                        list: payload,
                        status: "idle"
                    }

                    return newState
                })
                .addCase(fetchAbilities.rejected, state => {
                    state.status = "failed"
                })
        }
    }
)
export const {setAbilitiesIdle} = abilitiesSlice.actions;
export default abilitiesSlice.reducer
