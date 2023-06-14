import axios from 'axios';
import config from "../config";
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

export const MARK_NOTIFICATION_AS_READ = 'MARK_NOTIFICATION_AS_READ';
export const MARK_ALL_NOTIFICATIONS_AS_READ = 'MARK_ALL_NOTIFICATIONS_AS_READ';

export const fetchNotifications = () => {
    return async (dispatch, getState) => {
        const token = getState().user.token;
        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            try {
                const response = await axios.get(`${config[process.env.NODE_ENV].apiEndpoint}/notifications/user/`, { headers });
                dispatch(setNotifications(response.data.notifications));
            } catch (error) {
                console.log(error);
            }
        }
    };
};

export const setNotifications = (notifications) => {
    return {
        type: SET_NOTIFICATIONS,
        payload: notifications,
    };
};

export const markNotificationAsRead = (notificationId) => {
    return async (dispatch, getState) => {
        const token = getState().user.token;
        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            try {
                await axios.put(`${config[process.env.NODE_ENV].apiEndpoint}/notifications/user/${notificationId}/read`, null, {headers});
                dispatch({
                    type: MARK_NOTIFICATION_AS_READ,
                    payload: notificationId,
                });
            } catch (error) {
                console.log(error);
            }
        }
    };
};

export const markAllNotificationsAsRead = () => {
    return async (dispatch, getState) => {
        const token = getState().user.token;
        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            try {
                await axios.put(`${config[process.env.NODE_ENV].apiEndpoint}/notifications/user/markAllAsRead`, null, {headers});
                dispatch({
                    type: MARK_ALL_NOTIFICATIONS_AS_READ,
                });
            } catch (error) {
                console.log(error);
            }
        }
    };
};
