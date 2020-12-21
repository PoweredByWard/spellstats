import React from "react";
import "./App.css";

function Stat(props) {
    return(
        <li className="infobox">
            <p className="title">{props.title}</p>
            <p className="value">{props.value}</p>
        </li>
    )
}

export default Stat;