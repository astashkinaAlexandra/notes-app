import {HiBars3} from 'react-icons/hi2';
import {AiOutlineSearch} from "react-icons/ai";
import {FaRegStickyNote} from "react-icons/fa";

import './Dashboard.css';
import NotesList from "../Notes/NotesList/NotesList";

const Dashboard = ({folderId, isOpen, setIsOpen}) => {
    const toggle = () => setIsOpen(!isOpen);

    return (
        <section className="dashboard">
            <div className="top">
                <HiBars3 className="icon sidebar-toggle" onClick={toggle}></HiBars3>
                <div className="search-box">
                    <AiOutlineSearch className="icon"></AiOutlineSearch>
                    <input type="text" placeholder="Search here..."/>
                </div>
            </div>
            <div className="dash-content">
                <div className="overview">
                    <div className="title">
                        <div className="icon-bg">
                            <FaRegStickyNote className="icon"></FaRegStickyNote>
                        </div>
                        <span className="text">Notes</span>
                    </div>
                    <NotesList folderId={folderId}></NotesList>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
