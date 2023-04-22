import {useState} from "react";
import {BsFolder} from "react-icons/bs";
import {IoIosClose} from "react-icons/io"

const Folder = ({folder, handleDeleteFolder}) => {
    const [folderTitle, setFolderTitle] = useState(folder.title);

    const handleChange = (event) => {
        setFolderTitle(event.target.value);
    }

    return (
        <li className="folder-item">
            <a href="#">
                <BsFolder className="icon"></BsFolder>
                <span className="link-name">{folder.title}</span>
            </a>
            <IoIosClose
                onClick={() => handleDeleteFolder(folder.id)}
                className="icon icon-delete"/>
        </li>
    );
};

export default Folder;
