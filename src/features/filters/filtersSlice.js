import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filterAdded: (state, action) => {
            state.push(action.payload)
        },
        filterRemoved: (state, action) => {
            state.filter(item => item !== action.payload);
        },
        allFiltersRemoved: (state, action) => {
            state = initialState;
        }
    }
})

export default filtersSlice.reducer;