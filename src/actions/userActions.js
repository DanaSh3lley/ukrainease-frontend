import axios from 'axios';
import config from "../config";
import Cookies from "js-cookie"

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';
export const CHECK_LOGIN_STATUS = 'CHECK_LOGIN_STATUS';
export const LOGOUT = 'LOGOUT';

export const signup = (userData) => {
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

export const login = (credentials) => {
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
export const FORGOT_REQUEST = 'FORGOT_REQUEST'
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS'
export const FORGOT_ERROR = 'FORGOT_ERROR'

export const forgot = (credentials) => {
    return (dispatch) => {
        dispatch({type: FORGOT_REQUEST});
        axios
            .post(`${config[process.env.NODE_ENV].apiEndpoint}/users/forgot-password`, credentials)
            .then((response) => {
                dispatch({type: FORGOT_SUCCESS, payload: response.data});
            })
            .catch((error) => {
                dispatch({type: FORGOT_ERROR, payload: error.response.data});
            });
    };
};

export const RESET_REQUEST = 'RESET_REQUEST'
export const RESET_SUCCESS = 'RESET_SUCCESS'
export const RESET_ERROR = 'RESET_ERROR'

export const reset = (token, data) => {
    return (dispatch) => {
        dispatch({type: RESET_REQUEST});
        axios
            .post(`${config[process.env.NODE_ENV].apiEndpoint}/users/reset-password/${token}`, data)
            .then((response) => {
                dispatch({type: RESET_SUCCESS, payload: response.data});
            })
            .catch((error) => {
                dispatch({type: RESET_ERROR, payload: error.response.data});
            });
    };
};

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';


export const updateUser = (data) => {
    return async (dispatch, getState) => {
        const token = Cookies.get('token');
        const { isLoading } = getState().user;
        if (token && !isLoading) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            dispatch({type: UPDATE_USER_REQUEST});
            try {
                const response = await axios.patch(`${config[process.env.NODE_ENV].apiEndpoint}/users/update-profile`, data,{ headers });
                dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
                dispatch(getUserInfo())
            } catch (error) {
                dispatch({ type: UPDATE_USER_ERROR, payload: error.response.data });
            }
        }
    };
};

export const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';

export const updatePassword = (data) => {
    return async (dispatch, getState) => {
        const token = Cookies.get('token');
        const { isLoading } = getState().user;
        if (token && !isLoading) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            dispatch({type: UPDATE_PASSWORD_REQUEST});
            try {
                const response = await axios.patch(`${config[process.env.NODE_ENV].apiEndpoint}/users/updateMyPassword`, data,{ headers });
                dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: response.data });
                Cookies.remove('token')
            } catch (error) {
                dispatch({ type: UPDATE_PASSWORD_ERROR, payload: error.response.data });
            }
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({type: LOGOUT});
        Cookies.remove('token');
    };
};

export const checkLoginStatus = () => {
    return (dispatch) => {
        const token = Cookies.get('token');
        const isLoggedIn = !!token;
        dispatch({type: CHECK_LOGIN_STATUS, payload: {isLoggedIn, token}});
    };
};

export const getUserInfo = () => {
    return async (dispatch, getState) => {
        const token = Cookies.get('token');
        const { user } = getState();
        const { isLoading } = user;

        if (token && !isLoading) {
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