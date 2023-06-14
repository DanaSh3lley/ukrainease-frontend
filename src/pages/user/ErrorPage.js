import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { SentimentDissatisfied, ErrorOutline, Refresh } from '@mui/icons-material';

const ErrorPage = ({ errorCode }) => {
    let errorMessage = '';
    let buttonText = '';
    let buttonLink = '';
    let icon = null;

    if (errorCode === 'unauthorized') {
        errorMessage = 'Unauthorized Access';
        buttonText = 'Go to Home';
        buttonLink = '/';
        icon = <SentimentDissatisfied fontSize="large" />;
    } else if (errorCode === 'notfound') {
        errorMessage = 'Page Not Found';
        buttonText = 'Go to Home';
        buttonLink = '/';
        icon = <ErrorOutline fontSize="large" />;
    } else {
        errorMessage = 'Something Went Wrong';
        buttonText = 'Try Again';
        buttonLink = '/';
        icon = <Refresh fontSize="large" />;
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                {icon}
                <Typography variant="h4" gutterBottom>
                    {errorMessage}
                </Typography>
                <Button component={Link} to={buttonLink} variant="contained" color="primary">
                    {buttonText}
                </Button>
            </Paper>
        </Box>
    );
};

export default ErrorPage;
