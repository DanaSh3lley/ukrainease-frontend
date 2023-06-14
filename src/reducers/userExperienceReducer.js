import {
    GET_USER_EXPERIENCE_ERROR,
    GET_USER_EXPERIENCE_REQUEST,
    GET_USER_EXPERIENCE_SUCCESS
} from "../actions/userExperienceActions";

const initialState = {
    dailyExperiences: [],
    isLoading: false,
    error: null,
};

const userExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_EXPERIENCE_SUCCESS:
            return {
                ...state,
                dailyExperiences: action.payload.dailyExperiences,
                isLoading: false,
                error: null,
            };
        case GET_USER_EXPERIENCE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case GET_USER_EXPERIENCE_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};

export default userExperienceReducer;
