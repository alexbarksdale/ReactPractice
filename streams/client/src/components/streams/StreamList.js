import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streamReducer.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon tv' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // Object: takes all the values from the object passed and turns it into an Array
    return { streamReducer: Object.values(state.streamReducer) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
