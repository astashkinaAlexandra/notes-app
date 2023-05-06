import React from "react";
import AuthService from "../../services/auth.service";
import Avatar from "boring-avatars";
import {IoMailOutline, IoPersonOutline, IoLogOutOutline} from "react-icons/io5";
import './Dropdown.css';

const Dropdown = ({dropdown}) => {
    const currentUser = AuthService.getCurrentUser();

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <div className={dropdown ? "sub-menu-wrap" : "sub-menu-wrap open"}>
            <div className="sub-menu">
                <div className="user-info">
                    <Avatar
                        size={45}
                        name={currentUser.username}
                        variant="beam"
                        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />
                    <h3>{currentUser.username}</h3>
                </div>
                <hr/>
                <div className="sub-menu-item">
                    <IoMailOutline className="icon"/>
                    <span>{currentUser.email}</span>
                </div>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) =>
                        <div className="sub-menu-item">
                            <IoPersonOutline className="icon"/>
                            <span key={index}>{role}</span>
                        </div>
                    )}
                <div className="sub-menu-item">
                    <a href="/login" onClick={logOut}>
                        <IoLogOutOutline className="icon"/>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
