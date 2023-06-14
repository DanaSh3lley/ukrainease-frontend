import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Bell, SignIn, User } from 'phosphor-react';
import LinkButton from '../UI/LinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications, markNotificationAsRead, markAllNotificationsAsRead } from '../../actions/notificationActions';
import { Badge, IconButton, Button, Menu, MenuItem } from '@mui/material';

const UserNavigationWrapper = styled('nav')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1.5),
}));

const IconWrapper = styled('span')(({ theme }) => ({
    display: 'inline-flex',
    marginLeft: theme.spacing(1.5),
}));

const UserNavigation = ({ isLoggedIn }) => {
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notification.notifications);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    const handleNotificationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationItemClick = (notificationId) => {
        dispatch(markNotificationAsRead(notificationId));
        handleNotificationClose();
    };

    const handleMarkAllNotificationsAsRead = () => {
        dispatch(markAllNotificationsAsRead());
        handleNotificationClose();
    };

    return (
        <UserNavigationWrapper>
            {isLoggedIn ? (
                <>
                    <Button sx={{color: 'white'}}>
                        <IconButton color="inherit" onClick={handleNotificationClick}>
                            <Badge badgeContent={notifications.filter(m => !m.read).length} color="secondary">
                                <Bell size={32} />
                            </Badge>
                        </IconButton>
                        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleNotificationClose}>
                            {notifications.map((notification) => (
                                <MenuItem sx={{fontWeight: notification.read ? '400' : '800'}} key={notification._id} onClick={() => handleNotificationItemClick(notification._id)}>
                                    {notification.message}
                                </MenuItem>
                            ))}
                            {notifications.length > 0 && (
                                <MenuItem onClick={handleMarkAllNotificationsAsRead}>Mark All as Read</MenuItem>
                            )}
                        </Menu>
                    </Button>
                    <LinkButton component="a" href="/profile">
                        Профіль
                        <IconWrapper>
                            <User size={24} />
                        </IconWrapper>
                    </LinkButton>
                </>
            ) : (
                <>
                    <LinkButton component="a" href="/login">
                        Вхід
                        <IconWrapper>
                            <SignIn size={24} />
                        </IconWrapper>
                    </LinkButton>
                    <LinkButton component="a" href="/signup">
                        Реєстрація
                        <IconWrapper>
                            <User size={24} />
                        </IconWrapper>
                    </LinkButton>
                </>
            )}
        </UserNavigationWrapper>
    );
};

export default UserNavigation;
