import axios from "axios";
import config from "../config";
import {getAwardsError, getAwardsRequest, getAwardsSuccess} from "./awardActions";

export const GET_USER_EXPERIENCE_REQUEST = 'GET_USER_EXPERIENCE_REQUEST';
export const GET_USER_EXPERIENCE_SUCCESS = 'GET_USER_EXPERIENCE_SUCCESS';
export const GET_USER_EXPERIENCE_ERROR = 'GET_USER_EXPERIENCE_ERROR';

export const getUserExperienceRequest = () => ({
    type: GET_USER_EXPERIENCE_REQUEST,
});

export const getUserExperienceSuccess = (data) => ({
    type: GET_USER_EXPERIENCE_SUCCESS,
    payload: data,
});

export const getUserExperienceError = (error) => ({
    type: GET_USER_EXPERIENCE_ERROR,
    payload: error,
});

export const getUserExperience = () => {
    return (dispatch, getState) => {
        const token = getState().user.token;
        const isLoading = getState().userExperience.isLoading;
        if (token && !isLoading) {
            dispatch(getUserExperienceRequest());
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios
                .get(`${config[process.env.NODE_ENV].apiEndpoint}/daily-experience/user`, {headers})
                .then((response) => {
                    dispatch(getUserExperienceSuccess(response.data));
                })
                .catch((error) => {
                    dispatch(getUserExperienceError(error));
                });
        }
    };
};
