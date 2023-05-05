import React from "react";
import {Link} from "react-router-dom";
import {BsFolder} from "react-icons/bs";
import {IoIosClose} from "react-icons/io";

const Folder = ({folder, handleDeleteFolder}) => {
    return (
        <li className="folder-item">
            <Link key={folder.id} to={`/folders/${folder.id}/notes`} style={{textDecoration: 'none'}}>
                <BsFolder className="icon"/>
                <span className="link-name">{folder.title}</span>
            </Link>
            <IoIosClose
                onClick={() => handleDeleteFolder(folder.id)}
                className="icon icon-delete"
            />
        </li>
    );
};

export default Folder;
