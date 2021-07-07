import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAdded } from '../filters/filtersSlice';

import { 
    JobListWrapper,       
    JobListContainer, 
    JobCard,
    JobLogo,
    JobInfo,
    JobIntro,
    JobCompany,
    JobNew,
    JobFeatured, 
    JobPosition,
    JobDetail,
    JobFilterContainer,
    JobFilter
} from './JobsListElements';

export const JobsList = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs);

    const renderedJobs = jobs.map(job => {
        return (
            <JobCard key={job.id}>
                <JobLogo src={job.logo} alt="company logo"/>
                <JobInfo>
                    <JobIntro>
                        <JobCompany>{job.company}</JobCompany>
                            { job.new ? <JobNew>new!</JobNew> : null }
                            { job.featured ? <JobFeatured>featured</JobFeatured> : null }
                    </JobIntro>
                    <div>
                        <JobPosition href="/">{job.position}</JobPosition>
                    </div>
                    <div>
                        <JobDetail>{job.postedAt}</JobDetail>
                        <JobDetail>{job.contract}</JobDetail>
                        <JobDetail>{job.location}</JobDetail>
                    </div>
                </JobInfo>
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
            </JobCard>
        )
    })

    return (
        <JobListWrapper>
            <JobListContainer>
            {renderedJobs}
            </JobListContainer>
        </JobListWrapper>
    )
}