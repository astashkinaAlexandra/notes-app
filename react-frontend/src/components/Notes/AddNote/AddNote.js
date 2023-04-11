import {useState} from "react";
// import "../Notes.css"

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = (event) => {
        event.preventDefault();

        const newNote = {
            text: noteText
        }

        if (noteText.trim().length > 0) {
            handleAddNote(newNote);
            setNoteText('');
        }
    };

    return (
        <div className='note new'>
            <textarea cols="10"
                      rows="8"
                      placeholder='Type to add a note...'
                      value={noteText}
                      onChange={handleChange}>
            </textarea>
            <div className='note-footer'>
                <small>200 Remaining</small>
                <button className='save-button' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;
