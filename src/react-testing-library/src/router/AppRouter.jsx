import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import UserDetails from "../pages/UserDetails";
import Users from "../user/Users";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
            <Route path="/users/:id" element={<UserDetails/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    );
};

export default AppRouter;