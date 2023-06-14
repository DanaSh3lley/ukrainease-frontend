import React from 'react';
import { Container, Typography, Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import newsletterImage from './icons/newsletterImage.svg'
import Grid from "@mui/material/Grid";
import CustomButton from "../UI/CustomButton";

const StyledNewsletterContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(4),
    marginBottom: '60px'
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.heading['03'],
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
    ...theme.typography.body.large['400'],
}));

const StyledImage = styled('img')({
    width: 400,
    borderRadius: 12,
});

const NewsletterSection = () => {
    return (
        <StyledNewsletterContainer maxWidth='xl'>
            <StyledTextContainer>
                <StyledTitle variant="h1">Розсилка!</StyledTitle>
                <StyledDescription variant="body1">
                    Будьте в курсі всього, що стосується UkrainEase. Підпишіться на нашу розсилку, щоб отримувати останні новини, оновлення та поради щодо вивчення української мови.
                </StyledDescription>
                <Grid sx={{gap: '12px', flexDirection: 'column', display: 'flex'}}>
                    <TextField
                        variant="outlined"
                        label="Email Address"
                        placeholder="Enter your email"
                        fullWidth
                    />
                    <CustomButton variant={'contained'}>Підписатись</CustomButton>
                </Grid>


            </StyledTextContainer>
            <StyledImage src={newsletterImage} alt="Newsletter" />
        </StyledNewsletterContainer>
    );
};

export default NewsletterSection;
