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
            state.filter(item => item !== action.payload);
        },
        allFiltersRemoved: (state, action) => {
            state = initialState;
        }
    }
})

export const { filterAdded, filterRemoved, allFiltersRemoved } = filtersSlice.actions;

export default filtersSlice.reducer;