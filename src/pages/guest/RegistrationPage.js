import React, {useEffect} from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import RegistrationForm from "../../component/auth/RegistrationForm/RegistrationForm";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn]);

    return (
        <div>
            <header>
                <h1>My Website</h1>
            </header>
            <main>
                <h1>Registration Page</h1>
                <RegistrationForm />
            </main>
            <footer>
                <p>© 2023 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default RegistrationPage;
