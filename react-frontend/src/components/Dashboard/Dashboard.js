import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import {useParams} from "react-router-dom";

const Dashboard = ({board}) => {
    const {folderId} = useParams();
    const [isOpen, setIsOpen] = useState(localStorage.getItem('toggle') === 'true');
    const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');

    const Board = board;

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
            <Navbar
                isOpen={isOpen}
                handleToggleDarkMode={toggleDarkMode}
            />
            <Board
                folderId={folderId}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
};

export default Dashboard;
