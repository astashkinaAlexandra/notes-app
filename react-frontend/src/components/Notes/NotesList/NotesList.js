import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import NoteService from "../../../services/note.service";
import {useEffect, useState} from "react";
import "../Notes.css"

const NotesList = ({folderId}) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (folderId) {
            getNotesByFolderId();
        } else {
            getAllNotes();
        }
    }, [folderId]);

    const getAllNotes = async () => {
        await NoteService.getAllNotes().then(response => {
            setNotes(response.data);
        });
    };

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
        <div className='notes-list'>
            <AddNote
                folderId={folderId}
                handleAddNote={addNote}/>
            {notes.map(note => (
                <Note
                    key={note.id}
                    note={note}
                    handleUpdateNote={updateNote}
                    handleDeleteNote={deleteNote}
                />
            ))}
        </div>
    );
};

export default NotesList;
