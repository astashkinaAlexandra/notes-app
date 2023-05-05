import React, {useEffect, useState} from "react";
import Navbar from "./Navbar/Navbar";
import NoteBoard from "./Dashboard/NoteBoard";
import {useParams} from "react-router-dom";

const UserDashboard = () => {
    const {folderId} = useParams();
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
            />
            <NoteBoard
                folderId={folderId}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
};

export default UserDashboard;
