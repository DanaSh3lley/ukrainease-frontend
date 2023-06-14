import {
    MARK_ALL_NOTIFICATIONS_AS_READ,
    MARK_NOTIFICATION_AS_READ,
    SET_NOTIFICATIONS
} from "../actions/notificationActions";

const initialState = {
    notifications: [],
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
            };
        case MARK_NOTIFICATION_AS_READ:
            const { notifications } = state;
            const { payload } = action;

            if (payload) {
                // Mark a specific notification as read
                const updatedNotifications = notifications.map((notification) =>
                    notification._id === payload ? { ...notification, read: true } : notification
                );

                return {
                    ...state,
                    notifications: updatedNotifications,
                };
            } else {
                // Mark all notifications as read
                const updatedNotifications = notifications.map((notification) => ({
                    ...notification,
                    read: true,
                }));

                return {
                    ...state,
                    notifications: updatedNotifications,
                };
            }
        case MARK_ALL_NOTIFICATIONS_AS_READ:
            // Mark all notifications as read
            const updatedNotifications = state.notifications.map((notification) => ({
                ...notification,
                read: true,
            }));

            return {
                ...state,
                notifications: updatedNotifications,
            };
        default:
            return state;
    }
};

export default notificationReducer;
