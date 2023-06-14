import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {styled} from "@mui/system";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updatePassword, updateUser} from "../../../actions/userActions";
import CustomButton from "../../../component/UI/CustomButton";
import Grid from "@mui/material/Grid";

const StyledUpdateForm = styled('form')(({theme}) => ({
    background: theme.palette.gray[0],
    padding: 40,
    borderRadius: 40,
    display: 'flex',
    margin: '0 auto',
    maxWidth: '600px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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

const UpdatePage = () => {
    useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordCurrent, setPasswordCurrent] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleChangeInfo = (e) => {
        e.preventDefault();
        dispatch(updateUser({name, email}));
    };
    const handleChangePassword = (e) => {
        e.preventDefault();
        dispatch(updatePassword({passwordConfirm, password, passwordCurrent}));
    };

    return (
        <Grid sx={{marginTop: '60px', marginBottom: '60px', gap: '30px', display: 'flex', flexDirection: 'column'}}>
            <StyledUpdateForm onSubmit={handleChangeInfo}>
                <Title>Налаштування</Title>
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
                    <CustomButton type={'submit'} variant="contained">
                        Підтвердити
                    </CustomButton>
                </FieldsContainer>
            </StyledUpdateForm>
            <StyledUpdateForm onSubmit={handleChangePassword}>
                <Title>Зміна паролю</Title>
                <Description>Після цього вам буде необхідно заново зайти в аккаунт</Description>
                <FieldsContainer>
                    <TextField
                        type="password"
                        label="Пароль"
                        value={passwordCurrent}
                        onChange={(e) => setPasswordCurrent(e.target.value)}
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
                    <CustomButton type={'submit'} variant="contained">
                        Підтвредити
                    </CustomButton>
                </FieldsContainer>
            </StyledUpdateForm>
        </Grid>
    );
};

export default UpdatePage;
