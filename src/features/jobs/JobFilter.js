import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAdded, filterRemoved } from '../filters/filtersSlice';

import {JobFilter} from './JobsListElements';

export const Filter = ({filter}) => {
    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.selectedFilters);

    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (selectedFilters.includes(filter)) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selectedFilters, filter]);

    const onFilterClicked = (filter) => {
        if (isSelected) {
            dispatch(filterRemoved(filter));
        } else {
            dispatch(filterAdded(filter))
        }
    }

    return (
        <JobFilter onClick={() => onFilterClicked(filter)} aria-pressed={isSelected}>
            {filter}
        </JobFilter>
    )
}