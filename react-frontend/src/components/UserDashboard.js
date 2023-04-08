import React, {useState} from "react";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";

const UserDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <Navbar isOpen={isOpen}></Navbar>
            <Dashboard isOpen={isOpen} setIsOpen={setIsOpen}></Dashboard>
        </React.Fragment>
    );
};

export default UserDashboard;
