import './App.css';
import RegistrationPage from "./pages/guest/RegistrationPage";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/guest/LoginPage";
import DashboardPage from "./pages/user/DashboardPage/DashboardPage";
import {connect, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkLoginStatus, getUserInfo} from "./actions/userActions";
import PrivateRoute from "./routers/PrivateRoute";
import AdminPage from "./pages/admin/AdminPage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Catalog from "./component/Catalog/Catalog";

const App = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route path="/login" element={<PrivateRoute roles={['guest']}><LoginPage/></PrivateRoute>}/>
                <Route path="/register" element={<PrivateRoute roles={['guest']}><RegistrationPage/></PrivateRoute>}/>
                <Route path="/admin" element={<PrivateRoute roles={['user', 'admin']}><AdminPage/></PrivateRoute>}/>
                <Route path="/grammar" element={<PrivateRoute roles={['user', 'admin']}><Catalog type={'grammar'}/></PrivateRoute>}/>
                <Route path="/vocabulary" element={<PrivateRoute roles={['user', 'admin']}><Catalog type={'vocabulary'}/></PrivateRoute>}/>
                <Route path="/errors" element={<PrivateRoute roles={['user', 'admin']}><Catalog type={'errors'}/></PrivateRoute>}/>
                <Route path="/" element={<PrivateRoute roles={['user', 'admin']}><DashboardPage/></PrivateRoute>}/>
            </Routes>
            <Footer/>
        </>

    );
};



export default App;