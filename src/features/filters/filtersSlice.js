import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filtersSlice = createSlice({
    name: "selectedFilters",
    initialState,
    reducers: {
        filterAdded: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload)
            }
        },
        filterRemoved: (state, action) => {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        allFiltersRemoved: (state) => {
            state.splice(0, state.length);
        }
    }
})

export const { filterAdded, filterRemoved, allFiltersRemoved } = filtersSlice.actions;

export default filtersSlice.reducer;