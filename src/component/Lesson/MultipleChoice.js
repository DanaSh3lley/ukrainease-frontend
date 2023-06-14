import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const QuestionText = styled(Typography)(({ theme }) => ({
    ...theme.typography.body['xtraLarge']['400'],
    marginBottom: '8px',
}));

const MultipleChoice = ({ question, setAnswer }) => {
    const { text, options } = question;
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (event) => {
        const optionValue = event.target.value;
        let updatedSelectedOptions = [...selectedOptions];

        if (selectedOptions.includes(optionValue)) {
            updatedSelectedOptions = selectedOptions.filter((option) => option !== optionValue);
        } else {
            updatedSelectedOptions.push(optionValue);
        }

        setSelectedOptions(updatedSelectedOptions);
        setAnswer(updatedSelectedOptions);
    };

    return (
        <Grid>
            <FormControl component="fieldset">
                <QuestionText>{text}</QuestionText>
                <FormGroup>
                    {options.map((option) => (
                        <FormControlLabel
                            key={option._id}
                            value={option.text}
                            control={<Checkbox />}
                            label={option.text}
                            checked={selectedOptions.includes(option.text)}
                            onChange={handleOptionChange}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Grid>
    );
};

export default MultipleChoice;
