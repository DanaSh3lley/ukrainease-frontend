import React, {useEffect} from 'react';
import { styled, useTheme } from '@mui/system';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import logoImage from '../../assets/logo.svg';
import Navigation from "./Navigation";
import UserNavigation from "./UserNavigation";
import Logo from "../UI/Logo";
import {useDispatch, useSelector} from "react-redux";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
}));

const Toolbar = styled('span')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
}));

const Header = ({ isLoggedIn }) => {
    const theme = useTheme();
    const navigationLinks = [
        { label: 'Граматика', href: '/grammar' },
        { label: 'Словниковий запас', href: '/vocabulary' },
        { label: 'Типові помилки', href: '/errors' },
    ];
    return (
        <StyledAppBar position="static">
            <StyledContainer maxWidth="xl" theme={theme}>
                <Toolbar>
                    <Logo height={50} src={logoImage} alt="Logo" />
                    <Navigation links={navigationLinks} />
                    <UserNavigation isLoggedIn={isLoggedIn} />
                </Toolbar>
            </StyledContainer>
        </StyledAppBar>
    );
};

export default Header;
