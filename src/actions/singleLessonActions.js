import axios from 'axios';
import config from '../config';
import {START_LESSON_FAILURE, START_LESSON_REQUEST, START_LESSON_SUCCESS} from "./lessonActions";

export const FETCH_LESSON_REQUEST = 'FETCH_LESSON_REQUEST';
export const FETCH_LESSON_SUCCESS = 'FETCH_LESSON_SUCCESS';
export const FETCH_LESSON_FAILURE = 'FETCH_LESSON_FAILURE';

export const SUBMIT_ANSWER_REQUEST = 'SUBMIT_ANSWER_REQUEST';
export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const SUBMIT_ANSWER_FAILURE = 'SUBMIT_ANSWER_FAILURE';

export const fetchLessonRequest = () => ({
    type: FETCH_LESSON_REQUEST,
});

export const fetchLessonSuccess = (lesson) => ({
    type: FETCH_LESSON_SUCCESS,
    payload: lesson,
});

export const fetchLessonFailure = (error) => ({
    type: FETCH_LESSON_FAILURE,
    payload: error,
});

export const TAKE_LESSON_REQUEST = 'TAKE_LESSON_REQUEST';
export const TAKE_LESSON_SUCCESS = 'TAKE_LESSON_SUCCESS';
export const TAKE_LESSON_FAILURE = 'TAKE_LESSON_FAILURE';
export const FINISH_LESSON_REQUEST = 'FINISH_LESSON_REQUEST';
export const FINISH_LESSON_SUCCESS = 'FINISH_LESSON_SUCCESS';
export const FINISH_LESSON_FAILURE = 'FINISH_LESSON_FAILURE';

export const takeLessonRequest = () => ({
    type: TAKE_LESSON_REQUEST,
});

export const takeLessonSuccess = (lesson) => ({
    type: TAKE_LESSON_SUCCESS,
    payload: lesson,
});
export const takeLessonFailure = (error) => ({
    type: TAKE_LESSON_FAILURE,
    payload: error,
});

export const finishLessonRequest = () => ({
    type: FINISH_LESSON_REQUEST,
});

export const finishLessonSuccess = (lesson) => ({
    type: FINISH_LESSON_SUCCESS,
    payload: lesson,
});
export const finishLessonFailure = (error) => ({
    type: FINISH_LESSON_FAILURE,
    payload: error,
});


export const submitAnswerRequest = () => ({
    type: SUBMIT_ANSWER_REQUEST,
});

export const submitAnswerSuccess = () => ({
    type: SUBMIT_ANSWER_SUCCESS,
});

export const submitAnswerFailure = (error) => ({
    type: SUBMIT_ANSWER_FAILURE,
    payload: error,
});

export const getLesson = (lessonId) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        const isLoading = getState().lesson.isLoading;
        if (token && !isLoading) {
            dispatch(fetchLessonRequest());
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .get(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/current-user/${lessonId}`, {headers})
                .then((response) => {
                    dispatch(fetchLessonSuccess(response.data));
                })
                .catch((error) => {
                    dispatch(fetchLessonFailure(error));
                });
        }
    };
};

export const takeLesson = (lessonId) => {
    return async (dispatch, getState) => {
        const token = getState().user.token;
        const isLoading = getState().lesson.takeQuestionIsLoading;
        if (token && !isLoading) {
            await dispatch(getLesson(lessonId));
            if (getState().lesson.lessonProgress?.currentQuestion + 1 !== getState().lesson.lessonProgress?.sessionQuestions) {
                dispatch(takeLessonRequest());
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                axios
                    .post(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/${lessonId}/take`, null, {headers})
                    .then((response) => {
                        dispatch(takeLessonSuccess(response.data));
                    })
                    .catch((error) => {
                        console.log(error)
                        dispatch(takeLessonFailure(error));
                    });
            }
        }
    };
};

export const submitAnswer = (data) => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        const isLoading = getState().lesson.takeQuestionIsLoading;
        if (token && !isLoading) {
            dispatch(submitAnswerRequest());
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .post(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/submit-question`, data, {headers})
                .then(async () => {
                    await dispatch(submitAnswerSuccess());
                    await dispatch(takeLesson(data.lessonId));
                })
                .catch((error) => {
                    dispatch(submitAnswerFailure(error));
                });
        }
    };
};


export const finishLesson = (lessonId) => {
    return async (dispatch, getState) => {
        const token = getState().user.token;
        const isLoading = getState().lesson.isLoading;
        if (token && !isLoading && !getState().lesson.lessonResult) {

            dispatch(finishLessonRequest());
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .post(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/${lessonId}/finish`, null, {headers})
                .then((response) => {
                    dispatch(finishLessonSuccess(response));
                    console.log('suc')
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(finishLessonFailure(error));
                });
        }
    };
};

export const startLessonRequest = () => {
    return {
        type: START_LESSON_REQUEST,
    };
};

export const startLessonSuccess = (lessonId) => {
    return {
        type: START_LESSON_SUCCESS,
        payload: lessonId,
    };
};

export const startLessonFailure = (error) => {
    return {
        type: START_LESSON_FAILURE,
        payload: error,
    };
};

export const startLesson = (lessonId) => {
    return (dispatch, getState) => {
        dispatch(startLessonRequest());
        const token = getState().user.token;
        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const user = getState().user.user; // Get the current user from the state
            const requestBody = {
                user: user, // Include the user information in the request body
            };
            axios
                .post(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/${lessonId}/start`, requestBody, {headers})
                .then((response) => {
                    const {lessonId} = response.data;
                    dispatch(startLessonSuccess(lessonId));
                    dispatch(getLesson(lessonId))
                })
                .catch((error) => {
                    dispatch(startLessonFailure(error));
                });
        }
    };
};
