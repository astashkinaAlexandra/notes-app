import React from "react";
import Folder from "./Folder";
import AddFolder from "./AddFolder";
import './Folders.css'

const FolderList = ({
                        folders,
                        handleAddFolder,
                        handleDeleteFolder
                    }) => {
    return (
        <div className="folders">
            <AddFolder handleAddFolder={handleAddFolder}/>
            {folders.map(folder => (
                <Folder key={folder.id}
                        folder={folder}
                        handleDeleteFolder={handleDeleteFolder}
                />
            ))}
        </div>
    );
};

export default FolderList;
