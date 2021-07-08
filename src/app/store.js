import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobs/jobsSlice';
import filtersReducer from '../features/filters/filtersSlice';

export default configureStore({
    reducer: {
        jobs: jobsReducer,
        selectedFilters: filtersReducer,
    }
})