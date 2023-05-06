import React from "react";
import {Route, Routes} from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminBoard from "./components/Dashboard/AdminBoard/AdminBoard";
import FolderBoard from "./components/Dashboard/FolderBoard/FolderBoard";
import NoteBoard from "./components/Dashboard/NoteBoard/NoteBoard";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/user" element={<Dashboard board={FolderBoard}/>}/>
            <Route path="/admin" element={<Dashboard board={AdminBoard}/>}/>
            <Route path="/folders/:folderId/notes" element={<Dashboard board={NoteBoard}/>}/>
        </Routes>
    );
};

export default App;
