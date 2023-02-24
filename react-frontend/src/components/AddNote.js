import React, {Component} from 'react';
import NoteService from "../services/NoteService";

class AddNote extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            text: ''
        }

        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }

    saveNote = (e) => {
        e.preventDefault();
        let note = {text: this.state.text};

        NoteService.createNote(note).then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    changeTextHandler = (event) => {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div className='note new'>
                <textarea name="" id="" cols="10" rows="8"
                          placeholder='Type to add a note...'
                          value={this.state.text}
                          onChange={(event) => this.changeTextHandler(event)}>
                </textarea>
                <div className='note-footer'>
                    <small>200 Remaining</small>
                    <button className='save' onClick={this.saveNote}>Save</button>
                </div>
            </div>
        );
    }
}

export default AddNote;
