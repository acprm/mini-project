import {DataMin, Status} from "../../type";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../api/getData";

export interface MoveDetail extends DataMin {
    type: string
    shortDescription: string
    longDescription: string
    pp: number,
    accuracy: number,
    power: number,
    pokemon: number[]
}

export interface MovesState {
    list: MoveDetail[]
    status: Status
}

const initialState: MovesState = {
    list: [],
    status: "idle"
}

export const fetchMoves = createAsyncThunk(
    'moves/fetchMoves',
    async ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => {
        const result = await getData("move", id, lastId, limit)
        return result as unknown as MoveDetail[]
    }
)


export const movesSlice = createSlice({
        name: 'moves',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(fetchMoves.pending, (state) => {
                    state.status = "loading"
                })
                .addCase(fetchMoves.fulfilled, (state, {payload}) => {
                    const newState: MovesState = {
                        list: payload,
                        status: "idle"
                    }

                    return newState
                })
                .addCase(fetchMoves.rejected, state => {
                    state.status = "failed"
                })
        }
    }
)

export default movesSlice.reducer
