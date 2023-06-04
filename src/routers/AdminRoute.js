import {Navigate, Outlet, Route} from "react-router-dom";

const AdminRoute = ({ component: Component, isAuthenticated, userRole, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated && userRole === 'admin' ? <Outlet /> : <Navigate to="/login" />
        }
    />
);

export default AdminRoute