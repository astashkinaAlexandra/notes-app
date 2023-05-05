import React from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import {Route, Routes} from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/*<Route path="/profile" element={<Profile/>}/>*/}
            {/*<Route path="/notes" element={<UserDashboard/>}/>*/}
            <Route path="/user" element={<UserDashboard/>}/>
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="/folders/:folderId/notes" element={<UserDashboard/>}/>
        </Routes>
    );
};

export default App;
