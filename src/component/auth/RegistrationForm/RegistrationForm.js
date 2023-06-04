import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, TextField} from '@mui/material';
import {registerUser} from "../../../actions/userActions";

const RegistrationForm = ({registerUser}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser({name: name, email, password, passwordConfirm});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
            <div>
                <TextField
                    label="Nickname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <TextField
                    label="Confirm Password"
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                />
            </div>
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (userData) => dispatch(registerUser(userData)),
    };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
