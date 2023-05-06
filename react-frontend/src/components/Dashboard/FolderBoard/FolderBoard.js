import React, {useEffect, useState} from "react";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import ListHeading from "../../Notes/ListHeading";
import FolderList from "../../Folder/FolderList";

import AuthService from "../../../services/auth.service";
import FolderService from "../../../services/folder.service";
import NoteService from "../../../services/note.service";

import '../Dashboard.css';
import {TbFolders} from "react-icons/tb";

const FolderBoard = ({isOpen, setIsOpen}) => {
    const currentUser = AuthService.getCurrentUser();
    const [folders, setFolders] = useState([]);
    const [searchText, setSearchText] = useState('');

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
        <section className="dashboard">
            <DashboardHeader
                setSearchText={setSearchText}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div className="dash-content">
                <div className="overview">
                    <ListHeading
                        heading='Folders'
                        icon={<TbFolders className="icon"/>}
                    />
                    <FolderList
                        folders={folders.filter(folder =>
                            folder.title.toLowerCase().includes(searchText)
                        )}
                        handleAddFolder={addFolder}
                        handleDeleteFolder={deleteFolder}
                    />
                </div>
            </div>
        </section>
    );
};

export default FolderBoard;
