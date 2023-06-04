import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";
import {checkLoginStatus, getUserInfo} from "../actions/userActions";

const PrivateRoute = ({component: Component, roles = [], children}) => {
    const dispatch = useDispatch();
    const {user, isLoading, isLoaded, isLoggedIn} = useSelector((state) => state.user);
    const token = Cookies.get("token");

    useEffect(() => {
        dispatch(getUserInfo());
        dispatch(checkLoginStatus());
    }, [dispatch, token]);

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (isLoaded && !user && !roles.includes("guest")) {
        return <Navigate to="/login" />;
    } else if (user && !roles.includes(user.role) && !roles.includes("guest")) {
        return <Navigate to="/unauthorized"/>;
    }

    return children;
};

export default PrivateRoute;
