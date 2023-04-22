import {IoLogOutOutline, IoMoonOutline} from 'react-icons/io5'
import './Navbar.css';
import logo from '../../images/logo.png';
import Folder from "../Folder/Folder";
import {useEffect, useState} from "react";
import FolderService from "../../services/folder.service";
import AddFolder from "../Folder/AddFolder";
import {Link} from "react-router-dom";
import {BsFolder} from "react-icons/bs";

const Navbar = ({isOpen}) => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getAllFolders();
    }, []);

    const getAllFolders = async () => {
        await FolderService.getFolders().then(response => {
            setFolders(response.data)
        });
    }

    const addFolder = async (newFolder) => {
        await FolderService.createFolder(newFolder).then(() => {
            getAllFolders()
        });
    };

    const deleteFolder = async (id) => {
        FolderService.deleteFolder(id).then(response => setFolders(folders.filter((folder) => folder.id !== id)));
    };

    return (
        <nav className={isOpen ? "nav" : "nav close"}>
            <div className="logo-name">
                <div className="logo-img">
                    <img src={logo} alt="logo"/>
                </div>
                <span className="logo_name">noteme</span>
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <Link to={`/notes`} style={{textDecoration: 'none'}}>
                        <li>
                            <a href="#">
                                <BsFolder className="icon"></BsFolder>
                                <span className="link-name">All notes</span>
                            </a>
                        </li>
                    </Link>
                    {folders.map(folder => (
                        <Link key={folder.id} to={`/folders/${folder.id}/notes`} style={{textDecoration: 'none'}}>
                            <Folder key={folder.id}
                                    folder={folder}
                                    handleDeleteFolder={deleteFolder}
                            />
                        </Link>
                    ))}
                    <AddFolder handleAddFolder={addFolder}/>
                </ul>
                <ul className="logout-mode">
                    <li>
                        <a href="#">
                            <IoLogOutOutline className="icon"></IoLogOutOutline>
                            <span className="link-name">Logout</span>
                        </a>
                    </li>
                    <li className="mode">
                        <a href="#">
                            <IoMoonOutline className="icon"></IoMoonOutline>
                            <span className="link-name">Dark Mode</span>
                        </a>
                        <div className="mode-toggle">
                            <span className="switch"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
