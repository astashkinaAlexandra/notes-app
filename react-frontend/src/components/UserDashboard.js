import React, {useState} from "react";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import {useParams} from "react-router-dom";

const UserDashboard = () => {
    const {folderId} = useParams();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <Navbar isOpen={isOpen}></Navbar>
            <Dashboard folderId={folderId} isOpen={isOpen} setIsOpen={setIsOpen}></Dashboard>
        </React.Fragment>
    );
};

export default UserDashboard;
