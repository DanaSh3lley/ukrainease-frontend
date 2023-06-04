import React, {useEffect} from 'react';
import LoginForm from "../../component/auth/LoginForm/LoginForm";
import {Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn]);

    return (
        <Grid container justify="center" alignItems="center" style={{height: '100vh'}}>
            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login Page
                </Typography>
                <LoginForm/>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
