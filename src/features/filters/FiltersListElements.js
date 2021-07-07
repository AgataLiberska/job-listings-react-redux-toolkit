import styled from 'styled-components';

export const FilterListWrapper = styled.div`
    padding: 0 1.5rem;
    @media screen and (min-width: 50rem) {
        padding: 0 4rem;
    }
`

export const FilterListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 68.75rem;
    margin: -2.25rem auto 0;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
`

export const FiltersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    @media screen and (min-width: 50rem) {
        padding: 1.25rem 2.5rem;
    }
`

export const Filter = styled.button`
    position: relative;
    padding: 0.25rem 2.5rem 0.25rem 0.5rem;
    background-color: var(--filter);
    border: 0;
    border-radius: 5px;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--primary);
    cursor: pointer;
    overflow: hidden;
    &:hover {
        
        &::after {
            background-color: var(--secondary);
        }
    }
    &::after {
        content: 'x';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 2rem;
        padding: 0.125rem 0 0;
        background-color: var(--primary);
        text-align: center;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.5rem;
        color: white;
        transition: background-color 200ms ease-in-out;
    }
`

export const ClearFilters = styled.button`
    padding: 1.5rem 1.5rem;
    background: transparent;
    border: 0;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--secondary-light);
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: color 200ms ease-in-out, text-decoration-color 200ms ease-in-out;
    &:hover {
        color: var(--primary);
        text-decoration-color: var(--primary);
    }
    @media screen and (min-width: 50rem) {
        padding: 1.5rem 2.5rem;
    }
`