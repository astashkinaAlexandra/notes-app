import React from "react";
import Folder from "./Folder";
import AddFolder from "./AddFolder";

const FolderList = ({
                        folders,
                        handleAddFolder,
                        handleDeleteFolder
                    }) => {
    return (
        <>
            {folders.map(folder => (
                <Folder key={folder.id}
                        folder={folder}
                        handleDeleteFolder={handleDeleteFolder}
                />
            ))}
            <AddFolder handleAddFolder={handleAddFolder}/>
        </>
    );
};

export default FolderList;
