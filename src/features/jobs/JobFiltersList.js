import React from 'react';
import { Filter } from './JobFilter';
import { JobFilterContainer } from './JobsListElements';

export const JobFiltersList = ({job}) => {

    return (
        <JobFilterContainer>
            <Filter filter={job.role} />
            <Filter filter={job.level} />
            { job.languages ? 
                job.languages.map(language => (
                    <Filter filter={language} />))
                : null }
            { job.tools ? 
                job.tools.map(tool => (
                    <Filter filter={tool} />)) 
                : null }
        </JobFilterContainer>
    )
}