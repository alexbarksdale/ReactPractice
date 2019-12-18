import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
    // !V1
    // Immediately gets ran
    // constructor(props) {
    //     super(props); // Referes to parent contructor function (React.Component)

    //     this.state = { lat: null, errorMsg: '' }; // init state obj
    // }

    // !V2
    state = { lat: null, errorMsg: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMsg: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>;
        }

        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Loading msg='Please accept location request' />;
    }

    // We have to define render
    render() {
        return <div className='border red'>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
