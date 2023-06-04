import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, TextField} from "@mui/material";
import {loginUser} from "../../../actions/userActions";
const LoginForm = ({loginUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({email, password});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <TextField
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
            </div>
            <Button type={'submit'} variant="contained" >
                Register
            </Button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (userData) => dispatch(loginUser(userData)),
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);
