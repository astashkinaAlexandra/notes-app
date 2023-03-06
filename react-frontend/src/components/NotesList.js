import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleUpdateNote, handleDeleteNote}) => {
    return (
        <div className='notes-list'>
            <AddNote handleAddNote={handleAddNote}/>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    createdDate={note.createdDate}
                    handleUpdateNote={handleUpdateNote}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    );
};

export default NotesList;
