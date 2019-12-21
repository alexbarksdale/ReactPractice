import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSongReducer }) => {
    if (!selectedSongReducer) {
        return <div>Select a song</div>;
    }

    return (
        <div>
            <h3>Details for: </h3>
            <p>
                Title: {selectedSongReducer.title}
                <br />
                Duration: {selectedSongReducer.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { selectedSongReducer: state.selectedSongReducer };
};

export default connect(mapStateToProps)(SongDetail);
