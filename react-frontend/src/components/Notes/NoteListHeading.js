import React from "react";
import {FaRegStickyNote} from "react-icons/fa";

const NoteListHeading = (props) => {
    return (
        <div className="title">
            <div className="icon-bg">
                <FaRegStickyNote className="icon"/>
            </div>
            <span className="text">{props.heading}</span>
        </div>
    );
};

export default NoteListHeading;
