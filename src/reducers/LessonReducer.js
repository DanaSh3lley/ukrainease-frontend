import {
    GET_CATALOG_ERROR,
    GET_CATALOG_REQUEST,
    GET_CATALOG_SUCCESS, GET_NEED_REVIEW_ERROR, GET_NEED_REVIEW_REQUEST, GET_NEED_REVIEW_SUCCESS,
    GET_RECOMMENDED_LESSONS_ERROR,
    GET_RECOMMENDED_LESSONS_REQUEST,
    GET_RECOMMENDED_LESSONS_SUCCESS,
    START_LESSON_FAILURE,
    START_LESSON_REQUEST,
    START_LESSON_SUCCESS
} from "../actions/LessonActions";

const initialState = {
    catalog: [],
    recommendation: {grammar: [], vocabulary: [], typicalError: []},
    needReview: {grammar: [], vocabulary: [], typicalError: []},
    error: null,
    isLoading: false,
    totalPages: 0,
    currentPage: 1,
    categories: [],
    tags: []
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_CATALOG_SUCCESS:
            return {
                ...state,
                catalog: action.payload.data,
                isLoading: false,
                error: null,
                totalPages: action.payload.total,
                currentPage: action.payload.page,
                categories: action.payload.categories,
                tags: action.payload.tags
            };
        case GET_CATALOG_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case GET_RECOMMENDED_LESSONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_RECOMMENDED_LESSONS_SUCCESS:
            return {
                ...state,
                loading: false,
                recommendation: action.payload,
                error: null,
            };
        case GET_RECOMMENDED_LESSONS_ERROR:
            return {
                ...state,
                loading: false,
                recommendation: {grammar: [], vocabulary: [], typicalError: []},
                error: action.payload,
            };

        case GET_NEED_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_NEED_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                needReview: action.payload,
                error: null,
            };
        case GET_NEED_REVIEW_ERROR:
            return {
                ...state,
                loading: false,
                needReview: {grammar: [], vocabulary: [], typicalError: []},
                error: action.payload,
            };


        default:
            return state;
    }
};

export default catalogReducer;
