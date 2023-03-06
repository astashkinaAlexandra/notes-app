import {MdEdit, MdDeleteForever} from 'react-icons/md';
import {useState} from "react";

const Note = ({id, text, createdDate, handleUpdateNote, handleDeleteNote}) => {
    const [noteText, setNoteText] = useState(text);

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    return (
        <div className='note'>
            <textarea className='update'
                      cols="10"
                      rows="8"
                      defaultValue={text}
                      onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <small>{createdDate}</small>
                <div className='buttons'>
                    <MdEdit
                        onClick={() => handleUpdateNote(id, noteText)}
                        className="delete-icon"
                        size="1.3em"
                    />
                    < MdDeleteForever
                        onClick={() => handleDeleteNote(id)}
                        className='delete-icon'
                        size='1.3em'
                    />
                </div>

            </div>
        </div>
    );
};

export default Note;
