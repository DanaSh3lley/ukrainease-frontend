import './App.css';
import RegistrationPage from "./pages/guest/RegistrationPage";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/guest/LoginPage";
import DashboardPage from "./pages/user/DashboardPage/DashboardPage";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {checkLoginStatus, getUserInfo} from "./actions/userActions";
import PrivateRoute from "./routers/PrivateRoute";
import AdminPage from "./pages/admin/AdminPage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Catalog from "./pages/user/Catalog";
import Lesson from "./pages/user/Lesson/Lesson";
import Profile from "./pages/user/Profile/Profile";
import Cookies from "js-cookie";
import Awards from "./pages/user/Avard/Awards";
import ResetPage from "./pages/guest/ResetPage";
import UpdatePage from "./pages/user/Update/UpdatePage";
import LandingPage from "./pages/guest/LandingPage";
import Leaderboard from "./component/Leaderboard/Leaderboard";
import TheoryPage from "./pages/user/Lesson/TheoryPage";
import QuestionPage from "./pages/user/Lesson/QuestionPage";
import FinishPage from "./pages/user/Lesson/FinishPage";
import LessonReward from "./pages/user/Lesson/LessonReward";

const App = () => {
    const dispatch = useDispatch();
    const {user, isLoading, isLoggedIn} = useSelector((state) => state.user);
    const token = Cookies.get("token");

    useEffect(() => {
        if (token) {
            dispatch(getUserInfo());
        }
        dispatch(checkLoginStatus());
    }, [dispatch, token]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route path="/lesson/:id" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><Lesson /></PrivateRoute>}/>
                <Route path="/finish/:id" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><FinishPage /></PrivateRoute>}/>
                <Route path="/reward/:id" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><LessonReward /></PrivateRoute>}/>
                <Route path="/login" element={<PrivateRoute isLoading={isLoading} roles={['guest']}><LoginPage/></PrivateRoute>}/>
                <Route path="/signup" element={<PrivateRoute isLoading={isLoading} roles={['guest']}><RegistrationPage/></PrivateRoute>}/>
                <Route path="/reset/:token" element={<PrivateRoute isLoading={isLoading} roles={['guest']}><ResetPage/></PrivateRoute>}/>
                <Route path="/admin" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><AdminPage/></PrivateRoute>}/>
                <Route path="/grammar" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><Catalog title={"Граматика"} type={'grammar'}/></PrivateRoute>}/>
                <Route path="/vocabulary" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><Catalog title={"Словниковий запас"} type={'vocabulary'}/></PrivateRoute>}/>
                <Route path="/errors" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><Catalog title={"Типові помилки"} type={'typicalError'}/></PrivateRoute>}/>
                <Route path="/theory/:lessonId" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><TheoryPage/></PrivateRoute>}/>
                <Route path="/question/:lessonId" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><QuestionPage/></PrivateRoute>}/>
                <Route path="/profile" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><Profile/></PrivateRoute>}/>
                <Route path="/update" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><UpdatePage/></PrivateRoute>}/>
                <Route path="/awards" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><Awards/></PrivateRoute>}/>
                <Route path="/leaderboard" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><Leaderboard/></PrivateRoute>}/>
                <Route path="/dashboard" element={<PrivateRoute isLoading={isLoading} roles={['user', 'admin']}><DashboardPage/></PrivateRoute>}/>
                <Route path="/" element={<PrivateRoute isLoading={isLoading} roles={['guest']}><LandingPage/></PrivateRoute>}/>
            </Routes>
            <Footer/>
        </>

    );
};



export default App;