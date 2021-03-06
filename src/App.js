import React from 'react';

import GlobalStyle from './GlobalStyle';
import JobsList from './features/jobs/JobsList';
import FiltersList from './features/filters/FiltersList';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div className="banner" />
            <FiltersList />
            <JobsList />
        </>
    )
}

export default App;