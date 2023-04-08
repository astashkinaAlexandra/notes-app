import React from "react";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";

const UserDashboard = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
        </React.Fragment>
    );
};

export default UserDashboard;
