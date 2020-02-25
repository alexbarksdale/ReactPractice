import axios from 'axios';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './action.types';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: AUTH_SUCCESS,
        token: token
    };
};

export const authFail = (err) => {
    return {
        type: AUTH_FAIL,
        error: err
    };
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT
    };
};

const checkAuthTimeout = (expirationDate) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationDate * 1000);
    };
};

export const authLogin = (username, password) => {
    return (dispatch) => {
        dispatch(authStart());
        axios
            .post('http://127.0.0.1:8000/rest-auth/login', {
                username: username,
                password: password
            })
            .then((res) => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            })
            .catch((err) => {
                dispatch(authFail(err));
            });
    };
};

export const authSignup = (username, email, password, passwordConfirm) => {
    return (dispatch) => {
        dispatch(authStart());
        axios
            .post('http://127.0.0.1:8000/rest-auth/registration', {
                username: username,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
            })
            .then((res) => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            })
            .catch((err) => {
                dispatch(authFail(err));
            });
    };
};
