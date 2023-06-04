import {GET_CATALOG_ERROR, GET_CATALOG_REQUEST, GET_CATALOG_SUCCESS} from "../actions/LessonActions";

const initialState = {
    catalog: [],
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
        default:
            return state;
    }
};

export default catalogReducer;
