import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import NoteService from "../../../services/note.service";
import {useEffect, useState} from "react";
import "../Notes.css"

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        await NoteService.getNotes().then(response => {
            setNotes(response.data);
        });
    }

    const addNote = async (newNote) => {
        await NoteService.createNote(newNote).then(() => {
            getAllNotes()
        });
    };

    const updateNote = async (id, text) => {
        const updatedNote = {
            id: id,
            text: text
        };
        await NoteService.updateNote(id, updatedNote).then(() => {
            getAllNotes()
        })
    };

    const deleteNote = async (id) => {
        NoteService.deleteNote(id).then(response => setNotes(notes.filter((note) => note.id !== id)));
    };

    return (
        // <div className="container">
        <div className='notes-list'>
            <AddNote handleAddNote={addNote}/>
            {notes.map(note => (
                <Note
                    key={note.id}
                    note={note}
                    handleUpdateNote={updateNote}
                    handleDeleteNote={deleteNote}
                />
            ))}
        </div>
        // </div>
    );
};

export default NotesList;
