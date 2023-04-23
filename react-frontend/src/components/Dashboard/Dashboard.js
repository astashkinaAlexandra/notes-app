import {HiBars3} from 'react-icons/hi2';
import {FaRegStickyNote} from "react-icons/fa";

import './Dashboard.css';
import NotesList from "../Notes/NotesList/NotesList";
import Search from "../Search";
import {useEffect, useState} from "react";
import NoteService from "../../services/note.service";

const Dashboard = ({folderId, isOpen, setIsOpen}) => {
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getNotesByFolderId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [folderId]);

    const getNotesByFolderId = async () => {
        await NoteService.getNotesByFolderId(folderId).then(response => {
            setNotes(response.data);
        });
    };

    const addNote = async (newNote) => {
        await NoteService.createNote(folderId, newNote).then(() => {
            getNotesByFolderId();
        });
    };

    const updateNote = async (id, text) => {
        const updatedNote = {
            id: id,
            text: text
        };
        await NoteService.updateNote(id, updatedNote).then(() => {
            getNotesByFolderId();
        });
    };

    const deleteNote = async (id) => {
        NoteService.deleteNote(id).then(response => setNotes(notes.filter((note) => note.id !== id)));
    };
    const toggle = () => setIsOpen(!isOpen);

    return (
        <section className="dashboard">
            <div className="top">
                <HiBars3 className="icon sidebar-toggle" onClick={toggle}></HiBars3>
                <Search handleSearchNote={setSearchText}/>
            </div>
            <div className="dash-content">
                <div className="overview">
                    <div className="title">
                        <div className="icon-bg">
                            <FaRegStickyNote className="icon"></FaRegStickyNote>
                        </div>
                        <span className="text">Notes</span>
                    </div>
                    <NotesList
                        folderId={folderId}
                        notes={notes.filter((note) =>
                            note.text.toLowerCase().includes(searchText)
                        )}
                        handleAddNote={addNote}
                        handleUpdateNote={updateNote}
                        handleDeleteNote={deleteNote}
                    />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
