import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
                        Edit
                    </Link>
                    <Link to='' className='ui button negative'>
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streamReducer.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon tv' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // Object: takes all the values from the object passed and turns it into an Array
    return {
        streamReducer: Object.values(state.streamReducer),
        currentUserId: state.authReducer.userId,
        isSignedIn: state.authReducer.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
