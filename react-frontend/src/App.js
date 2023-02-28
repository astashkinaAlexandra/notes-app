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
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className='container'>
            <NotesList notes={notes}
                       handleAddNote={addNote}
                       handleDeleteNote={deleteNote}
            />
        </div>
    );
};

export default App;
