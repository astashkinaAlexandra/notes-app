import {MdEdit, MdDeleteForever} from 'react-icons/md';
import {useState} from "react";
// import "../Notes.css"

const Note = ({note, handleUpdateNote, handleDeleteNote}) => {
    const [noteText, setNoteText] = useState(note.text);

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    return (
        <div className='note'>
            <textarea cols="10"
                      rows="8"
                      defaultValue={note.text}
                      onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <small>{note.createdDate}</small>
                <div className='buttons'>
                    <MdEdit
                        onClick={() => handleUpdateNote(note.id, noteText)}
                        className="icon"
                    />
                    <MdDeleteForever
                        onClick={() => handleDeleteNote(note.id)}
                        className='icon'
                    />
                </div>
            </div>
        </div>
    );
};

export default Note;
