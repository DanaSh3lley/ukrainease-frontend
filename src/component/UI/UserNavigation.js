import React from 'react';
import { styled } from '@mui/system';
import { SignIn, User } from 'phosphor-react';
import LinkButton from '../UI/LinkButton';

const UserNavigationWrapper = styled('nav')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1.5),
}));

const IconWrapper = styled('span')(({ theme }) => ({
    display: 'inline-flex',
    marginLeft: theme.spacing(1.5),
}));

const UserNavigation = ({ isLoggedIn }) => {
    return (
        <UserNavigationWrapper>
            {isLoggedIn ? (
                <LinkButton component="a" href="/profile">
                    Профіль
                    <IconWrapper>
                        <User size={24} />
                    </IconWrapper>
                </LinkButton>
            ) : (
                <>
                    <LinkButton component="a" href="/signin">
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
