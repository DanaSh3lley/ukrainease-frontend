import {
    FETCH_LESSON_FAILURE,
    FETCH_LESSON_REQUEST,
    FETCH_LESSON_SUCCESS, FINISH_LESSON_FAILURE,
    FINISH_LESSON_REQUEST,
    FINISH_LESSON_SUCCESS,
    SUBMIT_ANSWER_FAILURE,
    SUBMIT_ANSWER_REQUEST,
    SUBMIT_ANSWER_SUCCESS,
    TAKE_LESSON_FAILURE,
    TAKE_LESSON_REQUEST,
    TAKE_LESSON_SUCCESS,
} from '../actions/singleLessonActions';
import {START_LESSON_FAILURE, START_LESSON_REQUEST, START_LESSON_SUCCESS} from "../actions/lessonActions";

const initialState = {
    lesson: null,
    lessonProgress: null,
    currentQuestion: null,
    isLoading: false,
    takeQuestionIsLoading: false,
    lessonResult: null,
    error: null,
};

const singleLessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LESSON_REQUEST:
        case SUBMIT_ANSWER_REQUEST:
        case FINISH_LESSON_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case TAKE_LESSON_REQUEST:
            return {
                ...state,
                takeQuestionIsLoading: true,
                error: null,
            };
        case TAKE_LESSON_SUCCESS:
            return {
                ...state,
                takeQuestionIsLoading: false,
                error: null,
                currentQuestion: action.payload.data.question
            };

        case FINISH_LESSON_SUCCESS:
            console.log(action.payload.data)
            return {
                ...state,
                takeQuestionIsLoading: false,
                isLoading: false,
                lessonResult: action.payload.data
            };
        case FETCH_LESSON_SUCCESS:
            return {
                ...state,
                lesson: action.payload.data.lesson,
                lessonProgress: action.payload.data.lessonProgress,
                isLoading: false,
                error: null,
            };
        case FETCH_LESSON_FAILURE:
        case SUBMIT_ANSWER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case TAKE_LESSON_FAILURE:
            return {
                ...state,
                takeQuestionIsLoading: false,
                error: action.payload,
            };

            case FINISH_LESSON_FAILURE:
            return {
                ...state,
                takeQuestionIsLoading: false,
                isLoading: false,
                error: action.payload,
            };
        case SUBMIT_ANSWER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        case START_LESSON_REQUEST:
            return {
                ...state,
                error: null,
            };

        case START_LESSON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
            };

        case START_LESSON_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default singleLessonReducer;
