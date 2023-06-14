import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {styled} from "@mui/system";
import {useNavigate} from "react-router-dom";
import CustomButton from "../../component/UI/CustomButton";
import Grid from "@mui/material/Grid";
import {reset} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";

const StyledResetForm = styled('form')(({theme}) => ({
    background: theme.palette.gray[0],
    padding: 40,
    borderRadius: 40,
    display: 'flex',
    margin: '60px auto',
    maxWidth: '600px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', // Center align the form content
}));

const Title = styled('h3')(({theme}) => ({
    ...theme.typography.heading['02'],
    marginBottom: 12,
}));

const Description = styled('p')(({theme}) => ({
    ...theme.typography.subheading['03'],
    maxWidth: 400,
    textAlign: 'center',
    marginTop: 0,
}));


const FieldsContainer = styled('div')(({theme}) => ({
    ...theme.typography.body.regular['300'],
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
    alignSelf: 'flex-start', // Align the fields on the left
}));

const ResetForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const error = useSelector(state => state.user.error)
    const [showForgotMessage, setShowForgotMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(error);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(reset({ password, passwordConfirm}));
        setShowForgotMessage(!error)
    };

    return (
        <StyledResetForm onSubmit={handleSubmit}>
            <Title>Скидання паролю</Title>
            <Description>Відновлюй пароль та повертайся до навчання!</Description>
            <FieldsContainer>
                <TextField
                    type="password"
                    label="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
                <TextField
                    type="password"
                    label="Пароль"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    fullWidth
                />
            </FieldsContainer>
            {showForgotMessage && !error && (
                <Typography color={'primary'} variant={'body1'}>Пароль успішно змінено! Повертайтесь до навчання вже зараз!</Typography>)}
            {!showForgotMessage && error && (
                <Typography color={'error'} variant={'body1'}>Щось пішло не так!</Typography>)}
            <Grid flex container direction={'row'}>
                <CustomButton type={'submit'} variant="contained">
                    Змінити пароль
                </CustomButton>
            </Grid>
        </StyledResetForm>
    );
};

export default ResetForm;
