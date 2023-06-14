import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomButton from "../UI/CustomButton";
import heroSection from '../../assets/hero.svg'

const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: theme.breakpoints.values.xl,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    ...theme.typography.heading['01'],
    maxWidth: '720px'
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
    ...theme.typography.subheading['01'],
    maxWidth: '650px',
    marginBottom: '50px'
}));

const StyledImage = styled('img')({
    width: '40%',
});

const HeroSection = () => {
    return (
        <StyledContainer maxWidth={'xl'}>
            <div>
                <StyledTitle variant="h1">
                    UkrainEase: ваш надійний помічник у вивченні української
                </StyledTitle>
                <StyledDescription variant="body1">
                    Зручний, простий та ефективний додаток для вивчення української мови
                </StyledDescription>
                <CustomButton
                    href={'/signup'}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                >
                    Розпочати
                </CustomButton>
            </div>
            <StyledImage src={heroSection} alt="Hero" />
        </StyledContainer>
    );
};

export default HeroSection;
