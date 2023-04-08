import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import NoteService from "../../../services/note.service";
import {useEffect, useState} from "react";
import "../Notes.css"

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        NoteService.getNotes().then(response => {
            setNotes(response.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    const addNote = (text) => {
        const newNote = {
            text: text
        }
        const newNotes = [...notes, newNote];
        NoteService.createNote(newNote).then(response => setNotes(newNotes));
    };

    const updateNote = (id, text) => {
        const updatedNote = {
            id: id,
            text: text
        };
        const newNotes = notes.map((notes) =>
            notes.id === id ? updatedNote : notes
        );
        NoteService.updateNote(id, updatedNote).then(response => setNotes(newNotes));
    };

    const deleteNote = (id) => {
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
