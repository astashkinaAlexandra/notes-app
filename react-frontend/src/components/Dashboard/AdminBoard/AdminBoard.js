import React, {useEffect, useState} from "react";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import ListHeading from "../../Notes/ListHeading";

import UserService from "../../../services/user.service";
import FolderService from "../../../services/folder.service";
import NoteService from "../../../services/note.service";

import '../Dashboard.css';
import './AdminBoard.css';

import {FiFolder, FiUsers} from "react-icons/fi";
import {FaRegStickyNote} from "react-icons/fa";
import {BsTable} from "react-icons/bs";
import {BiTachometer} from "react-icons/bi";

const AdminBoard = ({isOpen, setIsOpen}) => {
    const [users, setUsers] = useState([]);
    const [folders, setFolders] = useState([]);
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getUsers();
        getFolders();
        getNotes();
    }, []);

    const getUsers = () => {
        UserService.getAllUsers().then(response => {
            setUsers(response.data);
        });
    };

    const getFolders = () => {
        FolderService.getFolders().then(response => {
            setFolders(response.data);
        });
    };

    const getNotes = () => {
        NoteService.getAllNotes().then(response => {
            setNotes(response.data);
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
                            <span className="number">{users.length}</span>
                        </div>
                        <div className="box box2">
                            <FiFolder className="icon"/>
                            <span className="text">Total Folders</span>
                            <span className="number">{folders.length}</span>
                        </div>
                        <div className="box box3">
                            <FaRegStickyNote className="icon"/>
                            <span className="text">Total Notes</span>
                            <span className="number">{notes.length}</span>
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
