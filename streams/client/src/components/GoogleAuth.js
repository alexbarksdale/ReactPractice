import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // returns a promise
            window.gapi.client
                .init({
                    clientId: `${process.env.REACT_APP_API_KEY}`,
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    // @params: returns a boolean
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthBtn() {
        if (this.props.isSignedIn === null) {
            return;
        } else if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className='google icon' />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className='ui green google button' onClick={this.onSignInClick}>
                    <i className='google icon' />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthBtn()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.authReducer.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
