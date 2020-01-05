import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

const App = () => {
    const [lat, errMsg] = useLocation();

    let content;
    if (errMsg) {
        content = <div>Error: {errMsg}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Loading msg='Please accept location request' />;
    }

    return <div className='border red'>{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
