import React, {Component} from 'react';
import {MdDeleteForever} from "react-icons/md";
import AddNote from "./AddNote";
import NoteService from "../services/NoteService";

class NotesList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        NoteService.getNotes().then((res) => {
            this.setState({notes: res.data});
        });
    }

    render() {
        return (
            <div className='notes-list'>
                <AddNote/>
                {
                    this.state.notes.map(
                        note =>
                            <div key={note.id} className='note'>
                                <span>{note.text}</span>
                                <div className='note-footer'>
                                    <small>{note.createdDate}</small>
                                    <MdDeleteForever className='delete-icon' size='1.3em'/>
                                </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default NotesList;
