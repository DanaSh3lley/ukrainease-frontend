import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(FormControl)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '16px',
});

const AnswerTextField = styled(TextField)({
    width: '100%',
    marginTop: '8px',
});

const FillBlank = ({ question, setAnswer }) => {
    const { text } = question;
    const [answer, setAnswerValue] = useState('');

    useEffect(() => {
        console.log(answer);
    }, [answer]);

    const handleAnswerChange = (event) => {
        const newAnswer = event.target.value;
        setAnswerValue(newAnswer);
        setAnswer(newAnswer);
    };

    return (
        <FormContainer>
            <Typography variant="body1">{text}</Typography>
            <AnswerTextField
                value={answer}
                label="Відповідь"
                variant="outlined"
                onChange={handleAnswerChange}
            />
        </FormContainer>
    );
};

export default FillBlank;
