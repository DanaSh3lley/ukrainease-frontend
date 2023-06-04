import {
    CHECK_LOGIN_STATUS,
    GET_USER_INFO_ERROR,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../actions/userActions';

const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
    isLoading: false,
    isLoaded: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.data.user,
                isLoading: false,
                isLoggedIn: true,
                isLoaded: true
            };
        case REGISTER_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload,
                isLoading: false
            }
        case REGISTER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null,
                isLoaded: false
            }
        }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                isLoading: false,
                user: action.payload.data.user,
                isLoaded: true
            };
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null,
                isLoaded: false,
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                user: null,
                error: action.payload,
                isLoading: false
            }
        }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
            };
        case CHECK_LOGIN_STATUS:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                token: action.payload.token,
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                user: action.payload.data.data,
                error: null,
                isLoading: false,
                isLoaded: true
            };
        case GET_USER_INFO_REQUEST: {
            return {
                ...state,
                error: null,
                isLoading: true,
                isLoaded: false
            }
        }
        case GET_USER_INFO_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};

export default userReducer;
