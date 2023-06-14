import Typography from "@mui/material/Typography";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useState} from "react";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/system";

const QuestionText = styled(Typography)(({theme}) => ({
    ...theme.typography.body['xtraLarge']['400'],
    marginBottom: '8px'
}));

const SingleChoice = ({question, setAnswer}) => {
    const { text, options } = question;

    const handleOptionChange = (event) => {
        setAnswer(event.target.value);
    };

    return (
        <Grid>
            <FormControl component="fieldset">
                <QuestionText>{text}</QuestionText>
                <RadioGroup name="options" onChange={handleOptionChange}>
                    {options.map((option) => (
                        <FormControlLabel
                            key={option._id}
                            value={option.text}
                            control={<Radio />}
                            label={option.text}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Grid>
    );
}

export default SingleChoice