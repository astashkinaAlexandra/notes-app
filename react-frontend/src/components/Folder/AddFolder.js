import React, {useState} from "react";
import {TbPlus} from "react-icons/tb";

const AddFolder = ({handleAddFolder}) => {
    const [folderTitle, setFolderTitle] = useState('');

    const handleChange = (event) => {
        setFolderTitle(event.target.value);
    };

    const handleSaveClick = (event) => {
        event.preventDefault();

        const newFolder = {
            title: folderTitle
        }

        if (folderTitle.trim().length > 0) {
            handleAddFolder(newFolder);
            setFolderTitle('');
        }
    };

    return (
        <div className="folder">
            <TbPlus
                onClick={handleSaveClick}
                className="icon add"/>
            <div className='folder-footer'>
                <input
                    type='text'
                    placeholder='Add folder title...'
                    value={folderTitle}
                    onChange={handleChange}>
                </input>
                <button className='save-button' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddFolder;
