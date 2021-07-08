import React from 'react';
import { useSelector } from 'react-redux';
import { JobFiltersList } from './JobFiltersList';
// btw this is totally useless just need it to make other stuff work (hopefully)
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
} from './JobsListElements';

const JobsList = () => {
    const jobs = useSelector((state) => state.jobs);
    const selectedFilters = useSelector(state => state.selectedFilters);

    const filteredJobs = (jobsArr, filtersArr) => {
        if (filtersArr.length === 0) {
            return jobsArr;
        }

        const matchJob = (filter, job) => filter === job.role || filter === job.level || job.languages.includes(filter) || job.tools?.includes(filter);

        const filteredJobs = jobsArr.filter(job => {
            let isMatch = true;
    
            for (let i=0; i < filtersArr.length; i++ ) {
                if (!matchJob(filtersArr[i], job)) {
                    isMatch = false;
                }
            }
            return isMatch;
        });
    
        return filteredJobs;
    }

    const renderedJobs = filteredJobs(jobs, selectedFilters).map(job => {
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
                <JobFiltersList job={job} />
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

export default JobsList;