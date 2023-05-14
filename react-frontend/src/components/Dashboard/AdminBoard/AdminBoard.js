import React, {useEffect, useState} from "react";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import ListHeading from "../../Notes/ListHeading";

import AdminService from "../../../services/admin.service";
import UserService from "../../../services/user.service";

import '../Dashboard.css';
import './AdminBoard.css';

import {FiFolder, FiUsers} from "react-icons/fi";
import {FaRegStickyNote} from "react-icons/fa";
import {BsTable} from "react-icons/bs";
import {BiTachometer} from "react-icons/bi";

const AdminBoard = ({isOpen, setIsOpen}) => {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [numberOfFolders, setNumberOfFolders] = useState(0);
    const [numberOfNotes, setNumberOfNotes] = useState(0);

    useEffect(() => {
        getUsers();
        getNumberOfUsers();
        getNumberOfFolders();
        getNumberOfNotes();
    }, []);

    const getUsers = () => {
        UserService.getAllUsers().then(response => {
            setUsers(response.data);
        });
    };

    const getNumberOfUsers = () => {
        AdminService.getNumberOfUsers().then(response => {
            setNumberOfUsers(response.data);
        });
    };

    const getNumberOfFolders = () => {
        AdminService.getNumberOfFolders().then(response => {
            setNumberOfFolders(response.data);
        });
    };

    const getNumberOfNotes = () => {
        AdminService.getNumberOfNotes().then(response => {
            setNumberOfNotes(response.data);
        });
    };

    return (
        <section className="dashboard">
            <DashboardHeader
                setSearchText={setSearchText}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div className="dash-content">
                <div className="overview">
                    <ListHeading
                        heading='Dashboard'
                        icon={<BiTachometer className="icon"/>}
                    />
                    <div className="boxes">
                        <div className="box box1">
                            <FiUsers className="icon"/>
                            <span className="text">Total Users</span>
                            <span className="number">{numberOfUsers}</span>
                        </div>
                        <div className="box box2">
                            <FiFolder className="icon"/>
                            <span className="text">Total Folders</span>
                            <span className="number">{numberOfFolders}</span>
                        </div>
                        <div className="box box3">
                            <FaRegStickyNote className="icon"/>
                            <span className="text">Total Notes</span>
                            <span className="number">{numberOfNotes}</span>
                        </div>
                    </div>
                </div>
                <div className="user-list">
                    <ListHeading
                        heading='User Table'
                        icon={<BsTable className="icon"/>}
                    />
                    <div className="table-wrapper">
                        <table>
                            <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            </thead>
                            <tbody>
                            {users.filter(user => user.username.toLowerCase().includes(searchText)).map(filterUser => (
                                <tr>
                                    <td>{filterUser.id}</td>
                                    <td>{filterUser.username}</td>
                                    <td>{filterUser.email}</td>
                                    <td>
                                        {filterUser.roles.map((role) =>
                                            <span>{role.name}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminBoard;
