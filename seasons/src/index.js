import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props); // Referes to parent contructor function (React.Component)

        this.state = { lat: null };
    }

    // We have to define render
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
