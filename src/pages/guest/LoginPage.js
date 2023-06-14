import React, {useState} from 'react';
import {Box, Modal, TextField} from "@mui/material";
import {styled} from "@mui/system";
import CustomButton from "../../component/UI/CustomButton";
import Grid from "@mui/material/Grid";
import {forgot, login} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";

const StyledLoginForm = styled('form')(({theme}) => ({
    background: theme.palette.gray[0],
    padding: 40,
    borderRadius: 40,
    margin: '60px auto',
    display: 'flex',
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

const ModalContainer = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: theme.palette.gray[0],
    padding: theme.spacing(4),
    outline: 'none',
    borderRadius: 8,
    minWidth: 300,
    maxWidth: 450,
}));

const LoginPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const error = useSelector(state => state.user.error)
    const [showForgotMessage, setShowForgotMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(error);
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password}))
    };

    const handleForgot = (e) => {
        e.preventDefault();
        dispatch(forgot({email}))
        setShowForgotMessage(!error)
    };

    return (
        <StyledLoginForm onSubmit={handleSubmit}>
            <Title>Вхід</Title>
            <Description>Увійдіть, щоб продовжити свою подорож до вивчення української мови</Description>
            <FieldsContainer>
                <TextField
                    type="email"
                    label="Email"
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
            </FieldsContainer>
            <Grid flex container direction={'row'}>
                <CustomButton type={'submit'} variant="contained">
                    Увійти
                </CustomButton>
                <CustomButton variant={'text'} onClick={handleOpenModal} type={'button'}>
                    Забули пароль?
                </CustomButton>
            </Grid>

            <Modal open={openModal} onClose={handleCloseModal}>
                <ModalContainer>
                    <h3>Скинути пароль</h3>
                    <p>Забули свій пароль? Нічого страшного! Введіть свою електронну адресу нижче, і ми надішлемо вам
                        посилання для зміни пароля.</p>
                    <TextField
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    {showForgotMessage && !error && (
                        <Typography color={'primary'} variant={'body1'}>Перевірте пошту!</Typography>)}
                    {!showForgotMessage && error && (
                        <Typography color={'error'} variant={'body1'}>Щось пішло не так!</Typography>)}
                    <Grid container direction="column" marginTop={2} spacing={2}>
                        <Grid item>
                            <CustomButton
                                type="submit"
                                variant="contained"
                                fullWidth
                                onClick={handleForgot}
                            >
                                Скинути
                            </CustomButton>
                        </Grid>
                        <Grid item>
                            <CustomButton
                                onClick={handleCloseModal}
                                variant="ghoast"
                                fullWidth
                            >
                                Назад
                            </CustomButton>
                        </Grid>
                    </Grid>
                </ModalContainer>
            </Modal>
        </StyledLoginForm>
    );
};

export default LoginPage;
