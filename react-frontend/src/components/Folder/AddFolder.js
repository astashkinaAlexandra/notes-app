import {AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";

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
        <li>
            <a href="#">
                <AiOutlinePlus
                    onClick={handleSaveClick}
                    className="icon"/>
                <input
                    type='text'
                    placeholder='Add folder...'
                    value={folderTitle}
                    onChange={handleChange}>
                </input>
            </a>
        </li>
    );
};

export default AddFolder;
