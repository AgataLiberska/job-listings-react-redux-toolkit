import React from 'react';
import { useDispatch } from 'react-redux';
import { filterAdded } from '../filters/filtersSlice';

import { JobFilterContainer, JobFilter } from './JobsListElements';

export const JobFilters = ({job}) => {
    const dispatch = useDispatch();

    return (
        <JobFilterContainer>
            <JobFilter onClick={() => dispatch(filterAdded(job.role))}>
                {job.role}
            </JobFilter>
            <JobFilter onClick={() => dispatch(filterAdded(job.level))}>
                {job.level}
            </JobFilter>
            { job.languages ? 
                job.languages.map(language => (
                    <JobFilter onClick={() => dispatch(filterAdded(language))}>
                        {language}
                    </JobFilter>))
            : null }
            { job.tools ? 
                job.tools.map(tool => (
                    <JobFilter onClick={() => dispatch(filterAdded(tool))}>
                        {tool}
                    </JobFilter>)) 
                : null }
        </JobFilterContainer>
    )
}