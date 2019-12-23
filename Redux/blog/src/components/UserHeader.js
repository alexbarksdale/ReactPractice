import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return <div className='header'>{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.usersReducer.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(UserHeader);
