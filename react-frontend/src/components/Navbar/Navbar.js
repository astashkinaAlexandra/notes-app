import {IoLogOutOutline, IoMoonOutline} from 'react-icons/io5'
import './Navbar.css';
import logo from '../../images/logo.png';
import Folder from "../Folder/Folder";
import {useEffect, useState} from "react";
import FolderService from "../../services/folder.service";
import AddFolder from "../Folder/AddFolder";
import {Link} from "react-router-dom";
import AuthService from "../../services/auth.service";

const Navbar = ({isOpen}) => {
    const currentUserId = AuthService.getCurrentUser().id;
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getFoldersByUserId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUserId]);

    const getFoldersByUserId = async () => {
        await FolderService.getFoldersByUserId(currentUserId).then(response => {
            setFolders(response.data)
        });
    };

    const addFolder = async (newFolder) => {
        await FolderService.createFolder(currentUserId, newFolder).then(() => {
            getFoldersByUserId()
        });
    };

    const deleteFolder = async (id) => {
        FolderService.deleteFolder(id).then(response => setFolders(folders.filter((folder) => folder.id !== id)));
    };

    const logOut = () => {
        AuthService.logout();
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
                        <a href="/login" onClick={logOut}>
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
