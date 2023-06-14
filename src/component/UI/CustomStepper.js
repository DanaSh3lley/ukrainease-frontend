import React from 'react';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';

const StepperContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
}));

const Step = styled('div')(({ theme, completed }) => ({
    width: '16px',
    height: '80px',
    backgroundColor: completed ? theme.palette.primary.main : theme.palette.gray['200'],
    marginBottom: theme.spacing(1),
    borderRadius: '8px'
}));

const CustomStepper = ({ activeStep }) => {
    return (
        <StepperContainer>
            <Step completed={activeStep >= 1} />
            <Step completed={activeStep >= 2} />
            <Step completed={activeStep >= 3} />
            <Step completed={activeStep >= 4} />
        </StepperContainer>
    );
};

export default CustomStepper;
