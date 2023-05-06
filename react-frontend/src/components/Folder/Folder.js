import React from "react";
import {TbFolder, TbX} from "react-icons/tb";
import {Link} from "react-router-dom";

const Folder = ({folder, handleDeleteFolder}) => {
    return (
        <div className="folder folder1">
            <div className="folder-top">
                <TbX
                    onClick={() => handleDeleteFolder(folder.id)}
                    className="icon close"
                />
            </div>
            <Link className="folder-content" to={`/folders/${folder.id}/notes`}>
                <TbFolder className='icon'/>
                <span className="text">{folder.title}</span>
            </Link>
        </div>
    );
};

export default Folder;
