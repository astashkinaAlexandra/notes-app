import {IoLogOutOutline, IoMoonOutline} from 'react-icons/io5'
import './Navbar.css';
import logo from '../../images/logo.png';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AuthService from "../../services/auth.service";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({isOpen, handleToggleDarkMode}) => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showUserBoard, setShowUserBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

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
        <nav className={isOpen ? "nav" : "nav close"}>
            <div className="logo-name">
                <div className="logo-img">
                    <img src={logo} alt="logo"/>
                </div>
                <Link to={"/"} style={{textDecoration: 'none'}}>
                    <span className="logo_name">noteme</span>
                </Link>
            </div>
            <div className="menu-items">
                <NavbarLinks
                    showUserBoard={showUserBoard}
                    showAdminBoard={showAdminBoard}
                />
                <ul className="logout-mode">
                    {currentUser && (
                        <li>
                            <Link to={"/login"} onClick={logOut}>
                                <IoLogOutOutline className="icon"/>
                                <span className="link-name">Logout</span>
                            </Link>
                        </li>
                    )}
                    <li className="mode">
                        <a href="#">
                            <IoMoonOutline className="icon"/>
                            <span className="link-name">Dark Mode</span>
                        </a>
                        <div className="mode-toggle" onClick={handleToggleDarkMode}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
