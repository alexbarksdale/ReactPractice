import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'It is hot outside',
        iconName: 'sun'
    },
    winter: {
        text: 'It is cold outside',
        iconName: 'snowflake'
    }
};

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
    const { text, iconName } = seasonConfig[season]; // returns {text, iconName}

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} massive icon icon-left`} /> <h1>{text}</h1>
            <i className={`${iconName} massive icon icon-right`} />
        </div>
    );
};

export default SeasonDisplay;
