import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import {Box, Button, Grid} from '@mui/material';
import {styled} from '@mui/system';
import {useDispatch} from "react-redux";
import CustomButton from "../UI/CustomButton";

const QuestionText = styled(Typography)(({theme}) => ({
    ...theme.typography.body['xtraLarge']['400'],
    marginBottom: '8px',
}));

const Card = ({question, setAnswer, answer, lessonId}) => {
    const {text} = question;
    const dispatch = useDispatch();
    const [showAnswer, setShowAnswer] = useState()
    const correctAnswer = question.options[0]?.text
    const handleRightClick = () => {
        setAnswer(true);
        setShowAnswer(true)
    };

    const handleWrongClick = () => {
        setAnswer(false);
        setShowAnswer(true)
    };

    return (
        <Grid>
            <QuestionText>{text}</QuestionText>
            {!showAnswer && <Box display="flex" gap={'20px'} justifyContent={'center'}>
                <CustomButton variant="contained" color="success" onClick={handleRightClick}>
                    Right
                </CustomButton>
                <CustomButton variant="contained" color="error" onClick={handleWrongClick}>
                    Wrong
                </CustomButton>
            </Box>}
            {showAnswer && <span>{correctAnswer}</span>}
        </Grid>
    );
};

export default Card;
