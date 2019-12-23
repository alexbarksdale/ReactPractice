import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    // this.props === {songsReducer: state.songsReducer}
    renderList() {
        return this.props.songsReducer.map((song) => {
            return (
                <div className='items' key={song.title}>
                    <div className='right floated content'>
                        <button
                            className='ui button primary'
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className='content'>{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className='ui divided list'>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    // show up as props for components
    return { songsReducer: state.songsReducer };
};

export default connect(mapStateToProps, { selectSong })(SongList);
