import axios from "axios";
import config from "../config";

export const GET_CATALOG_REQUEST = 'GET_CATALOG_REQUEST';
export const GET_CATALOG_SUCCESS = 'GET_CATALOG_SUCCESS';
export const GET_CATALOG_ERROR = 'GET_CATALOG_ERROR';


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
    console.log(params)
    return (dispatch, getState) => {
        Object.entries(params).forEach(([key,value]) => {
            if (Array.isArray(value)) {
                params[key] = value.join(',')
            }
            if(!params[key]) delete params[key]
        })
        dispatch(getCatalogRequest());
        const token = getState().user.token;
        if (token) {
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
