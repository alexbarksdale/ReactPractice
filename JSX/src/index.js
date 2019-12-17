// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const labelText = 'Enter name:';
    const buttonText = { text: 'Click me' };

    return (
        <div>
            <label htmlFor='name' className='label'>
                {labelText}
            </label>
            <input id='name' type='text' />
            <button style={{ backgroundColor: 'blue', color: '#fff' }}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
