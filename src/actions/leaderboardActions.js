import Cookies from "js-cookie";
import axios from "axios";
import config from "../config";


export const GET_LEADERBOARD_REQUEST = 'GET_LEADERBOARD_REQUEST';
export const GET_LEADERBOARD_SUCCESS = 'GET_LEADERBOARD_SUCCESS';
export const GET_LEADERBOARD_ERROR = 'GET_LEADERBOARD_ERROR';

export const getLeaderboard = () => {
    return async (dispatch, getState) => {
        const token = Cookies.get('token');
        const { isLoading } = getState().user;
        if (token && !isLoading) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            dispatch({type: GET_LEADERBOARD_REQUEST});
            try {
                const response = await axios.get(`${config[process.env.NODE_ENV].apiEndpoint}/leagues/user`,{ headers });
                dispatch({ type: GET_LEADERBOARD_SUCCESS, payload: response.data });
            } catch (error) {
                dispatch({ type: GET_LEADERBOARD_ERROR, payload: error.response.data });
            }
        }
    };
};