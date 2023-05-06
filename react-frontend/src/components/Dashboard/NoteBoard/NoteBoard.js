import React, {useEffect, useState} from "react";

import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import ListHeading from "../../Notes/ListHeading";
import NotesList from "../../Notes/NotesList";

import NoteService from "../../../services/note.service";
import {FaRegStickyNote} from "react-icons/fa";

const NoteBoard = ({folderId, isOpen, setIsOpen}) => {
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

    return (
        <section className="dashboard">
            <DashboardHeader
                setSearchText={setSearchText}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div className="dash-content">
                <div className="overview">
                    <ListHeading
                        heading='Notes'
                        icon={<FaRegStickyNote className="icon"/>}
                    />
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

export default NoteBoard;
