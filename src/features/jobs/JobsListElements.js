import styled from 'styled-components';

export const JobListWrapper = styled.div`
    padding: 3.5rem 1.5rem 2rem;
    @media screen and (min-width: 50rem) {
        padding: 4.75rem 4rem 7.5rem;
    }
`

export const JobListContainer = styled.ul`
    max-width: 68.75rem;
    margin: auto;
`

export const JobCard = styled.li`
    position: relative;
    padding: 2rem 1.5rem 1.5rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    &:not(:last-of-type) {
        margin-bottom: 2.5rem;
    }
    @media screen and (min-width: 50rem) {
        display: grid;
        grid-template-columns: 5.5rem 21rem auto;
        gap: 1.5rem;
        padding: 2rem 2.5rem;
        &:not(:last-of-type) {
            margin-bottom: 1.5rem;
        }
    }
`

export const JobLogo = styled.img`
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    height: 3rem;
    width: 3rem;
    @media screen and (min-width: 50rem) {
        position: relative;
        display: block;
        align-self: center;
        height: initial;
        width: initial;
        transform: translateY(0);
        justify-self: center;
    }
`

export const JobInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--secondary-light);
    @media screen and (min-width: 50rem) {
        padding-bottom: unset;
        border-bottom: 0;
    }
`

export const JobIntro = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`

export const JobCompany = styled.p`
    padding-right: 0.25rem;
    font-size: 0.8175rem;
    font-weight: 700;
    color: var(--primary);
    @media screen and (min-width: 50rem) {
        font-size: 0.875rem;
    }
`

export const JobNew = styled.span`
    display: inline-block;
    padding: 0.375rem 0.5rem 0.25rem;
    background-color: var(--primary);
    border-radius: 15px;
    font-size: 0.6875rem;
    font-weight: 700;
    color: white;
    line-height: 0.875rem;
    text-transform: uppercase;
`

export const JobFeatured = styled.span`
    display: inline-block;
    padding: 0.375rem 0.5rem 0.25rem;
    background-color: var(--secondary);
    border-radius: 15px;
    font-size: 0.6875rem;
    font-weight: 700;
    color: white;
    line-height: 0.875rem;
    text-transform: uppercase;
`

export const JobPosition = styled.a`
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--secondary);
    text-decoration: none;
    transition: color 200ms ease-in-out;
    &:hover {
        color: var(--primary);
    }
    @media screen and (min-width: 50rem) {
        font-size: 1.125rem;
    }
`

export const JobDetail = styled.span`
    font-size: 0.75rem;
    color: var(--secondary-light);
    &:not(:last-of-type) {
        margin-right: 2.25rem;
    }
    
`

export const JobFilterContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 1rem;
    @media screen and (min-width: 50rem) {
        padding-top: unset;
        align-items: center;
        justify-content: flex-end;
    }
`

export const JobFilter = styled.button`
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    background: var(--filter);
    border: 0;
    border-radius: 5px;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--primary);
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

    &:hover {
        background: var(--primary);
        color: white;
    }

    &[aria-pressed="true"] {
        background: var(--filter-pressed);
        color: white;

        &:hover {
            background: var(--primary);
        }
    }
`