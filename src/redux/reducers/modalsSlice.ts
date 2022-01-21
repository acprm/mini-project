import {createSlice} from "@reduxjs/toolkit";

export interface ModalsState {
    filter: boolean,
    menu: boolean,
    search: boolean,
}

const initialState: ModalsState = {
    filter: false,
    menu: false,
    search: false
}

export const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        closeFilter: state => {
            state.filter = false
        },
        openFilter: state => {
            state.filter = true
        },
        toggleMenu: state => {
            state.menu = !state.menu
        },
        toggleSearch: state => {
            state.search = !state.search
        }
    }
})

export const {closeFilter, openFilter,  toggleMenu, toggleSearch} = modalsSlice.actions

export default modalsSlice.reducer