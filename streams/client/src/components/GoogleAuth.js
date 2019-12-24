import React, { Component } from 'react';

export default class GoogleAuth extends Component {
    state = { isSignedIn: null };

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
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderAuthBtn() {
        if (this.state.isSignedIn === null) {
            return;
        } else if (this.state.isSignedIn) {
            return (
                <button className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className='ui green google button'>
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
