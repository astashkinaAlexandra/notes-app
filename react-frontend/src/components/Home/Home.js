import React, {useEffect, useState} from "react";
import {HiBars3} from "react-icons/hi2";
import "./Home.css"
import {Link} from "react-router-dom";
import AuthService from "../../services/auth.service";

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [showUserBoard, setShowUserBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowUserBoard(user.roles.includes("ROLE_USER"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <>
            <div className={isOpen ? "overlay" : "overlay close"}>
                <div className="overlay-content">
                    <ul>
                        <li>
                            <Link to={"/home"}>
                                Home
                            </Link>
                        </li>
                        {showUserBoard && (
                            <li>
                                <Link to={"/user"}>
                                    User
                                </Link>
                            </li>
                        )}
                        {showAdminBoard && (
                            <li>
                                <Link to={"/admin"}>
                                    Admin
                                </Link>
                            </li>
                        )}
                        {currentUser ? (
                            <div>
                                <li>
                                    <Link to={"/login"} onClick={logOut}>
                                        Logout
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            <div>
                                <li>
                                    <Link to={"/login"}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>
                                        Sign Up
                                    </Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
            <HiBars3 className={isOpen ? "nav-menu" : "nav-menu close"} onClick={toggleMenu}/>
            <div className="background-image"></div>
        </>
    );
};

export default Home;
