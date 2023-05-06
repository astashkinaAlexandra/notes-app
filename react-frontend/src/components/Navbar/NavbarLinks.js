import React from "react";
import {Link} from "react-router-dom";

import {AiOutlineHome} from "react-icons/ai";
import {RiAdminLine, RiUserLine} from "react-icons/ri";

const NavbarLinks = ({showUserBoard, showAdminBoard}) => {

    return (
        <ul className="nav-links">
            <li>
                <Link to={"/home"}>
                    <AiOutlineHome className="icon"/>
                    <span className="link-name">Home</span>
                </Link>
            </li>
            {showUserBoard && (
                <li>
                    <Link to={"/user"}>
                        <RiUserLine className="icon"/>
                        <span className="link-name">User</span>
                    </Link>
                </li>
            )}
            {showAdminBoard && (
                <li>
                    <Link to={"/admin"}>
                        <RiAdminLine className="icon"/>
                        <span className="link-name">Admin</span>
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default NavbarLinks;
