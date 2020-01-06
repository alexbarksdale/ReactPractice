import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const nameReducer = (state = { name: '' }, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            return { ...state, name: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counterReducer,
    nameReducer
});

const INITIAL_STATE = {};

const store = createStore(rootReducer, INITIAL_STATE);

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
            <Name />
        </Provider>
    );
};

const Counter = () => {
    const { count, name } = useSelector((state) => ({
        ...state.counterReducer,
        ...state.nameReducer
    }));
    const dispatch = useDispatch();

    const incrementCount = () => {
        dispatch({
            type: 'INCREMENT_COUNT'
        });
    };

    const decrementCount = () => {
        dispatch({
            type: 'DECREMENT_COUNT'
        });
    };

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <div>
                <h3>{name}</h3>
            </div>
        </>
    );
};

const Name = () => {
    const dispatch = useDispatch();

    const handleUpdateName = (event) => {
        dispatch({
            type: 'UPDATE_NAME',
            payload: event.target.value
        });
    };

    return (
        <div>
            <input placeholder='Input your name' onChange={handleUpdateName} />
        </div>
    );
};

export default App;
