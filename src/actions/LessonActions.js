import axios from "axios";
import config from "../config";
import {GET_LEADERBOARD_ERROR, GET_LEADERBOARD_REQUEST, GET_LEADERBOARD_SUCCESS} from "./LeaderboardActions";

export const GET_CATALOG_REQUEST = 'GET_CATALOG_REQUEST';
export const GET_CATALOG_SUCCESS = 'GET_CATALOG_SUCCESS';
export const GET_CATALOG_ERROR = 'GET_CATALOG_ERROR';
export const START_LESSON_REQUEST = 'START_LESSON_REQUEST';
export const START_LESSON_SUCCESS = 'START_LESSON_SUCCESS';
export const START_LESSON_FAILURE = 'START_LESSON_FAILURE';

export const getCatalogRequest = () => ({
    type: GET_CATALOG_REQUEST,
});

export const getCatalogSuccess = (data) => ({
    type: GET_CATALOG_SUCCESS,
    payload: data,
});

export const getCatalogError = (error) => ({
    type: GET_CATALOG_ERROR,
    payload: error,
});


export const getCatalog = (params) => {
    return (dispatch, getState) => {
        Object.entries(params).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                params[key] = value.join(',')
            }
            if (!params[key]) delete params[key]
        })
        dispatch(getCatalogRequest());
        const token = getState().user.token;
        const isLoading = getState().user.isLoading;
        if (token && !isLoading) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .get(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/current-user`, {headers, params})
                .then((response) => {
                    dispatch(getCatalogSuccess(response.data));
                })
                .catch((error) => {
                    dispatch(getCatalogError(error));
                });
        }
    };
};

export const GET_RECOMMENDED_LESSONS_REQUEST = 'GET_RECOMMENDED_LESSONS_REQUEST';

export const GET_RECOMMENDED_LESSONS_SUCCESS = 'GET_RECOMMENDED_LESSONS_SUCCESS';

export const GET_RECOMMENDED_LESSONS_ERROR = 'GET_RECOMMENDED_LESSONS_ERROR';


export const getRecommendedLessons = () => {
    return (dispatch, getState) => {

        const token = getState().user.token;
        if (token) {
            dispatch({type: GET_RECOMMENDED_LESSONS_REQUEST});
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .get(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/recommended`, {headers})
                .then((response) => {
                    dispatch({ type: GET_RECOMMENDED_LESSONS_SUCCESS, payload: response.data });

                })
                .catch((error) => {
                    dispatch({ type: GET_RECOMMENDED_LESSONS_ERROR, payload: error.response.data });
                });
        }
    };
};

export const GET_NEED_REVIEW_REQUEST = 'GET_NEED_REVIEW_REQUEST';
export const GET_NEED_REVIEW_SUCCESS = 'GET_NEED_REVIEW_SUCCESS';
export const GET_NEED_REVIEW_ERROR = 'GET_NEED_REVIEW_ERROR';


export const getNeedReviewLessons = () => {
    return (dispatch, getState) => {

        const token = getState().user.token;
        if (token) {
            dispatch({type: GET_NEED_REVIEW_REQUEST});
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .get(`${config[process.env.NODE_ENV].apiEndpoint}/lessons/needReview`, {headers})
                .then((response) => {
                    dispatch({ type: GET_NEED_REVIEW_SUCCESS, payload: response.data });

                })
                .catch((error) => {
                    dispatch({ type: GET_NEED_REVIEW_ERROR, payload: error.response.data });
                });
        }
    };
};

