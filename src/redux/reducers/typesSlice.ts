import {DataMin, Status} from "../../type";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../api/getData";

export interface TypeDetail extends DataMin {
    offensive: DamageRelation
    defensive: DamageRelation
    moves: number[]
    pokemon: number[]
}

export interface DamageRelation {
    double: number[],
    half: number[],
    zero: number[]
}

export interface TypesState {
    list: TypeDetail[]
    status: Status
}

const initialState: TypesState = {
    list: [],
    status: "idle"
}

export const fetchTypes = createAsyncThunk(
    'types/fetchTypes',
    async ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => {
        const result = await getData("type", id, lastId, limit)
        return result as unknown as TypeDetail[]
    }
)


export const typesSlice = createSlice({
        name: 'types',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(fetchTypes.pending, (state) => {
                    state.status = "loading"
                })
                .addCase(fetchTypes.fulfilled, (state, {payload}) => {
                    const newState: TypesState = {
                        list: payload,
                        status: "idle"
                    }

                    return newState
                })
                .addCase(fetchTypes.rejected, state => {
                    state.status = "failed"
                })
        }
    }
)

export default typesSlice.reducer
