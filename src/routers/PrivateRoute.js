import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loading from "../component/UI/Loading";

const PrivateRoute = ({component: Component, roles = [], children}) => {
    const navigate = useNavigate()
    const {user, isLoading} = useSelector((state) => state.user);

    if (isLoading) {
        return <Loading/>
    } else if (!user && !roles.includes("guest")) {
        return navigate("/login");
    } else if (user && roles.length === 1 && roles.includes("guest")) {
        return navigate("/dashboard");
    } else if (user && !roles.includes(user.role)) {
        return navigate("/unauthorized");
    }
    return children;
};

export default PrivateRoute;
