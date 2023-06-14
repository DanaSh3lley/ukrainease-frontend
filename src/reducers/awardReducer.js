import {GET_AWARDS_ERROR, GET_AWARDS_REQUEST, GET_AWARDS_SUCCESS} from "../actions/awardActions";

const initialState = {
    awards: [],
    error: null,
    isLoading: false,
};
const awardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AWARDS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_AWARDS_SUCCESS:
            return {
                ...state,
                awards: action.payload,
                isLoading: false,
                error: null,
            };
        case GET_AWARDS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default awardReducer