import React, {useEffect, useState} from "react";
import Navbar from "./Navbar/Navbar";
import AdminBoard from "./Dashboard/AdminBoard";

const AdminDashboard = () => {
    // const [showAdminBoard, setShowAdminBoard] = useState(false);
    // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [isOpen, setIsOpen] = useState(localStorage.getItem('toggle') === 'true');
    const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        localStorage.setItem('toggle', isOpen);
    }, [isOpen])

    useEffect(() => {
        localStorage.setItem('dark-mode', darkMode);
    }, [darkMode])

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <Navbar isOpen={isOpen}
                    handleToggleDarkMode={toggleDarkMode}
                // showAdminBoard={showAdminBoard}
                // setShowAdminBoard={setShowAdminBoard}
                // showModeratorBoard={showModeratorBoard}
                // setShowModeratorBoard={setShowModeratorBoard}
            />
            <AdminBoard isOpen={isOpen} setIsOpen={setIsOpen}></AdminBoard>
        </div>
    );
};

export default AdminDashboard;
