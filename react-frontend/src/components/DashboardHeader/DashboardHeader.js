import React, {useState} from "react";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import Avatar from "boring-avatars";
import {HiBars3} from "react-icons/hi2";
import AuthService from "../../services/auth.service";

import './DashboardHeader.css'

const DashboardHeader = ({setSearchText, isOpen, setIsOpen}) => {
    const currentUser = AuthService.getCurrentUser();
    const [dropdown, setDropdown] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdown(!dropdown);

    return (
        <div className="top">
            <HiBars3 className="icon sidebar-toggle" onClick={toggleSidebar}/>
            <Search handleSearchNote={setSearchText}/>
            <div className="avatar" onClick={toggleDropdown}>
                <Avatar
                    size={40}
                    name={currentUser.username}
                    variant="beam"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
            </div>
            <Dropdown dropdown={dropdown}></Dropdown>
        </div>
    );
};

export default DashboardHeader;
