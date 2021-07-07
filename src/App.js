import React from 'react';

import GlobalStyle from './GlobalStyle';
import { JobsList } from './features/jobs/jobsList';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div className="banner" />
            <JobsList />
        </>
    )
}

export default App;