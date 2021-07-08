import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAdded } from '../filters/filtersSlice';

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
    }, [selectedFilters, filter])

    return (
        <JobFilter onClick={() => dispatch(filterAdded(filter))} aria-pressed={isSelected}>
            {filter}
        </JobFilter>
    )
}