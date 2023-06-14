import {
    CHECK_LOGIN_STATUS,
    FORGOT_ERROR,
    FORGOT_REQUEST,
    FORGOT_SUCCESS,
    GET_USER_INFO_ERROR,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    RESET_ERROR,
    RESET_REQUEST,
    RESET_SUCCESS,
    UPDATE_PASSWORD_ERROR,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from '../actions/userActions';

const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
    isLoading: false,
    forgotLoading: false,
    isLoaded: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log('here')
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
        case FORGOT_REQUEST:
            return {
                ...state,
                forgotLoading: true,
            };
        case FORGOT_SUCCESS: {
            return {
                ...state,
                forgotLoading: false,
                error: null,
            }
        }
        case FORGOT_ERROR: {
            return {
                ...state,
                error: action.payload,
                forgotLoading: false
            }
        }
        case RESET_REQUEST:
            return {
                ...state,
                forgotLoading: true,
            };
        case RESET_SUCCESS: {
            return {
                ...state,
                forgotLoading: false,
                error: null,
            }
        }
        case RESET_ERROR: {
            return {
                ...state,
                error: action.payload,
                forgotLoading: false
            }
        }
        case LOGOUT:
            return {
                isLoggedIn: false,
                token: null,
                user: null,
                isLoading: false,
                forgotLoading: false,
                isLoaded: false,
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
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_PASSWORD_SUCCESS:
            return {
                isLoggedIn: false,
                token: null,
                user: null,
                isLoading: false,
                forgotLoading: false,
                isLoaded: false,
            }
        case UPDATE_PASSWORD_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case  UPDATE_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case  UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            }
        case  UPDATE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};

export default userReducer;
