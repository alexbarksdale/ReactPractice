import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.streamId);
    }

    onSubmit = (formValues) => {
        console.log('TCL: StreamEdit -> onSubmit -> formValues', formValues);
    };

    render() {
        if (!this.props.streamReducer) {
            return <div>Loading..</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={this.props.streamReducer}
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
