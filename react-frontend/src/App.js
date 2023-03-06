import {useEffect, useState} from "react";
import NotesList from "./components/NotesList";
import NoteService from "./services/NoteService";

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NoteService.getNotes().then(response => setNotes(response.data));
    }, []);

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
        <div className='container'>
            <NotesList notes={notes}
                       handleAddNote={addNote}
                       handleUpdateNote={updateNote}
                       handleDeleteNote={deleteNote}
            />
        </div>
    );
};

export default App;
