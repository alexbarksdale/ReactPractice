import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        //              Northern    Southern hemis
        return lat > 0 ? 'summer' : 'winter';
    } else {
        //              Northern    Southern hemis
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const seasonType = season === 'winter' ? 'It is chilly' : 'It is hot outside';

    return (
        <div>
            <h1>{seasonType}</h1>
        </div>
    );
};

export default SeasonDisplay;
