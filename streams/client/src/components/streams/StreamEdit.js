import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.streamId);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.streamId, formValues);
    };

    render() {
        if (!this.props.streamReducer) {
            return <div>Loading..</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(
                        this.props.streamReducer,
                        'title',
                        'description'
                    )}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { streamReducer: state.streamReducer[ownProps.match.params.streamId] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
