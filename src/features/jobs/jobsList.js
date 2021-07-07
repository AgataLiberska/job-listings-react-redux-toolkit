import React from 'react';
import { useSelector } from 'react-redux';
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
                    <JobFilter>
                        {job.role}
                    </JobFilter>
                    <JobFilter>
                        {job.level}
                    </JobFilter>
                    { job.languages ? 
                        job.languages.map(language => (
                        <JobFilter >
                            {language}
                        </JobFilter>))
                        : null }
                    { job.tools ? 
                        job.tools.map(tool => (
                        <JobFilter >
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