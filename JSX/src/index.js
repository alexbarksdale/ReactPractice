// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
<<<<<<< HEAD
    const labelText = 'Enter name:';
    const buttonText = { text: 'Click me' };
=======
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';
>>>>>>> e825b504c3dc74f46141e457756b2fae4c0fc85f

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
