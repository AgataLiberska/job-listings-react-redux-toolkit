import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterRemoved, allFiltersRemoved } from './filtersSlice';

import {
    FilterListWrapper,
    FilterListContainer,
    FiltersWrapper,
    Filter,
    ClearFilters
} from './FiltersListElements';

export const FiltersList = () => {
    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.selectedFilters);

    const renderedFilters = selectedFilters.map(filter => {
        return (
            <Filter 
                key={filter} 
                onClick={() => dispatch(filterRemoved(filter))}
            >
                {filter}
            </Filter>
        )
    })

    if (selectedFilters.length === 0) {
        return null;
    }

    return (
        <FilterListWrapper>
            <FilterListContainer>
                <FiltersWrapper>
                    {renderedFilters}
                </FiltersWrapper>
                <ClearFilters onClick={() => dispatch(allFiltersRemoved())}>Clear</ClearFilters>
            </FilterListContainer>
        </FilterListWrapper>
    )
}