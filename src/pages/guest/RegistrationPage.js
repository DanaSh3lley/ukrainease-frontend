import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {styled} from "@mui/system";
import {useNavigate} from "react-router-dom";
import CustomButton from "../../component/UI/CustomButton";
import Grid from "@mui/material/Grid";
import {signup} from "../../actions/userActions";
import {useDispatch} from "react-redux";

const StyledRegistrationForm = styled('form')(({theme}) => ({
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

const RegistrationPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup({name, email, password, passwordConfirm}));
    };

    return (
        <StyledRegistrationForm onSubmit={handleSubmit}>
            <Title>Реєстрація</Title>
            <Description>Приєднуйтесь до тисяч тих, хто вивчає українську мову на UkrainEase, і розпочніть свій шлях до
                вільного володіння мовою</Description>
            <FieldsContainer>
                <TextField
                    type="name"
                    label="Нікнейм"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    type="email"
                    label="Електронна пошта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
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
            <Grid flex container direction={'row'}>
                <CustomButton type={'submit'} variant="contained">
                    Зареєструватися
                </CustomButton>
                <CustomButton variant={'text'} onClick={() => navigate('/login')} type={'button'}>
                    Уже є аккаунт? Увійти
                </CustomButton>
            </Grid>
        </StyledRegistrationForm>
    );
};

export default RegistrationPage;
