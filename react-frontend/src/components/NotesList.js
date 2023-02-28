import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className='notes-list'>
            <AddNote handleAddNote={handleAddNote}/>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    createdDate={note.createdDate}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    );
};

export default NotesList;
