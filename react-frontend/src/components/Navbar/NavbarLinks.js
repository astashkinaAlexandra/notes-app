import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {RiAdminLine, RiUserLine} from "react-icons/ri";
import FolderService from "../../services/folder.service";
import FolderList from "../Folder/FolderList";
import AuthService from "../../services/auth.service";
import NoteService from "../../services/note.service";

const NavbarLinks = ({showUserBoard, showAdminBoard}) => {
    const currentUser = AuthService.getCurrentUser();
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getFoldersByUserId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser.id]);

    const getFoldersByUserId = async () => {
        await FolderService.getFoldersByUserId(currentUser.id).then(response => {
            setFolders(response.data)
        });
    };

    const addFolder = async (newFolder) => {
        await FolderService.createFolder(currentUser.id, newFolder).then(() => {
            getFoldersByUserId()
        });
    };

    const deleteFolder = async (id) => {
        FolderService.deleteFolder(id).then(response => setFolders(folders.filter((folder) => folder.id !== id)));
        NoteService.deleteAllNotesOfFolder(id);
    };

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
            <FolderList
                folders={folders}
                handleAddFolder={addFolder}
                handleDeleteFolder={deleteFolder}
            />
        </ul>
    );
};

export default NavbarLinks;
