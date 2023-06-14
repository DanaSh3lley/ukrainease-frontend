import axios from "axios";
import config from "../config";
import {getCatalogError, getCatalogRequest, getCatalogSuccess} from "./lessonActions";

export const GET_AWARDS_REQUEST = 'GET_AWARDS_REQUEST';
export const GET_AWARDS_SUCCESS = 'GET_AWARDS_SUCCESS';
export const GET_AWARDS_ERROR = 'GET_AWARDS_ERROR';

export const getAwardsRequest = () => ({
    type: GET_AWARDS_REQUEST,
});

export const getAwardsSuccess = (data) => ({
    type: GET_AWARDS_SUCCESS,
    payload: data,
});

export const getAwardsError = (error) => ({
    type: GET_AWARDS_ERROR,
    payload: error,
});

export const getAwards = () => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        const isLoading = getState().awards.isLoading;
        if (token && !isLoading) {
            dispatch(getAwardsRequest());
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .get(`${config[process.env.NODE_ENV].apiEndpoint}/awards/status`, {headers})
                .then((response) => {
                    dispatch(getAwardsSuccess(response.data));
                })
                .catch((error) => {
                    dispatch(getAwardsError(error));
                });
        }
    };
};