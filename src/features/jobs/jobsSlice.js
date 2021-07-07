import { createSlice } from '@reduxjs/toolkit';
import jobListings from '../../data/jobListings';

const initialState = jobListings;

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {}
});

export default jobsSlice.reducer;
