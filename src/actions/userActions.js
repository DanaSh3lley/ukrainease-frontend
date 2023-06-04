import axios from 'axios';
import config from "../config";
import Cookies from "js-cookie"

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const CHECK_LOGIN_STATUS = 'CHECK_LOGIN_STATUS';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';

export const registerUser = (userData) => {
    return (dispatch) => {
        dispatch({type: REGISTER_REQUEST});

        axios
            .post(`${config[process.env.NODE_ENV].apiEndpoint}/users/signup`, userData)
            .then((response) => {
                dispatch({type: REGISTER_SUCCESS, payload: response.data});
                Cookies.set('token',response.data.token)
            })
            .catch((error) => {
                dispatch({type: REGISTER_ERROR, payload: error.response.data});
            });
    };
};

export const loginUser = (credentials) => {
    return (dispatch) => {
        dispatch({type: LOGIN_REQUEST});

        axios
            .post(`${config[process.env.NODE_ENV].apiEndpoint}/users/login`, credentials)
            .then((response) => {
                dispatch({type: LOGIN_SUCCESS, payload: response.data});
                Cookies.set('token',response.data.token)
            })
            .catch((error) => {
                dispatch({type: LOGIN_ERROR, payload: error.response.data});
            });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({type: LOGOUT});
    };
};

export const checkLoginStatus = () => {
    return (dispatch, getState) => {
        const token = Cookies.get('token');
        const isLoggedIn = !!token;
        dispatch({type: CHECK_LOGIN_STATUS, payload: {isLoggedIn, token}});
    };
};

export const getUserInfo = () => {
    return async (dispatch, getState) => {
        const token = Cookies.get('token');
        const { user } = getState();
        const { isLoading, isLoaded } = user;
        if (token && !isLoading && !isLoaded) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            dispatch({type: GET_USER_INFO_REQUEST});
            try {
                const response = await axios.get(`${config[process.env.NODE_ENV].apiEndpoint}/users/profile`, { headers });
                dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.data });
            } catch (error) {
                dispatch({ type: GET_USER_INFO_ERROR, payload: error.response.data });
            }
        }
    };
};