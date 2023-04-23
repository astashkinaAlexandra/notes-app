import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import "../Notes.css"

const NotesList = ({
                       folderId,
                       notes,
                       handleAddNote,
                       handleUpdateNote,
                       handleDeleteNote
                   }) => {
    return (
        <div className='notes-list'>
            <AddNote
                folderId={folderId}
                handleAddNote={handleAddNote}/>
            {notes.map(note => (
                <Note
                    key={note.id}
                    note={note}
                    handleUpdateNote={handleUpdateNote}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    );
};

export default NotesList;
