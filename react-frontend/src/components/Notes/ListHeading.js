import React from "react";

const ListHeading = (props) => {
    return (
        <div className="title">
            <div className="icon-bg">
                {props.icon}
            </div>
            <span className="text">{props.heading}</span>
        </div>
    );
};

export default ListHeading;
