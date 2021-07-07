import React from 'react';
import { useSelector } from 'react-redux';

import {
    FilterListWrapper,
    FilterListContainer,
    FiltersWrapper,
    Filter,
    ClearFilters
} from './FiltersListElements';

export const FiltersList = () => {
    const selectedFilters = useSelector(state => state.selectedFilters);

    const renderedFilters = selectedFilters.map(filter => {
        return (
            <Filter key={filter}>{filter}</Filter>
        )
    })

    console.log(selectedFilters)

    if (selectedFilters.length === 0) {
        return null;
    }

    return (
        <FilterListWrapper>
            <FilterListContainer>
                <FiltersWrapper>
                    {renderedFilters}
                </FiltersWrapper>
                <ClearFilters>Clear</ClearFilters>
            </FilterListContainer>
        </FilterListWrapper>
    )
}