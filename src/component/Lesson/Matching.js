import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/system";

const QuestionText = styled(Typography)(({theme}) => ({
    ...theme.typography.body['xtraLarge']['400'],
    marginBottom: '8px',
    display: 'flex'
}));

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const MatchingQuiz = ({question, setAnswer}) => {
    const [leftOptions, setLeftOptions] = useState([]);
    const [rightOptions, setRightOptions] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [selectedRight, setSelectedRight] = useState(null);

    useEffect(() => {
        const shuffledLeftOptions = shuffleArray(question.matchingOptions.map(el => el.left));
        const shuffledRightOptions = shuffleArray(question.matchingOptions.map(el => el.right));
        setAnswer(null)
        setLeftOptions(shuffledLeftOptions);
        setRightOptions(shuffledRightOptions);
    }, []);

    const handleLeftClick = (left) => {
        if (selectedRight === null) {
            setSelectedLeft(left);
        }
    };

    const handleRightClick = (right) => {
        if (selectedLeft !== null && selectedRight === null) {
            setSelectedRight(right);
            const pair = [selectedLeft, right];
            setPairs((prevPairs) => [...prevPairs, pair]);
            setSelectedLeft(null);
            setSelectedRight(null);
            setAnswer((prevAnswers) => {
                if (prevAnswers === null || prevAnswers === undefined) {
                    return [pair];
                }
                return [...prevAnswers, pair];
            });
        }
    };

    const isOptionDisabled = (left, right) => {
        return pairs.some(([pairLeft, pairRight]) => {
            return pairLeft === left || pairRight === right;
        });
    };

    return (
        <Grid container spacing={2} sx={{flexDirection: 'column'}}>
            <QuestionText>{question.text}</QuestionText>
            <Grid sx={{display: 'flex', gap: '20px', flexWrap: 'nowrap'}}>
                <Grid item xs={6}>
                    <div>
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            flexDirection: 'column',
                        }}>
                            {leftOptions.map((left, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: selectedLeft === left ? '#7a5af8' : 'white',
                                        color: selectedLeft === left ? 'white' : 'black',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        cursor: 'pointer',
                                        opacity: isOptionDisabled(left, selectedRight) ? 0.5 : 1,
                                        borderRadius: '4px',
                                    }}
                                    onClick={() => handleLeftClick(left)}
                                >
                                    {left}
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        flexDirection: 'column',
                    }}>
                        {rightOptions.map((right, index) => (
                            <div
                                key={index}
                                style={{
                                    background: selectedRight === right ? '#7a5af8' : 'white',
                                    color: selectedRight === right ? 'white' : 'black',
                                    padding: '20px',
                                    marginBottom: '10px',
                                    cursor: 'pointer',
                                    opacity: isOptionDisabled(selectedLeft, right) ? 0.5 : 1,
                                    borderRadius: '4px',
                                }}
                                onClick={() => handleRightClick(right)}
                            >
                                {right}
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MatchingQuiz;
