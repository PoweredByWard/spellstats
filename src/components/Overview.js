import "./App.css";
import React, { useState } from "react";
//import Class from "./Class";
//import { getClass } from "./utils/classesConvertor";
import { Link } from "react-router-dom";
import Header from "./header";
import Char from "./char";

function Classes() {
  const [chartype, setChartype] = useState("win");
  return (
    <React.Fragment>
      <Header />
      <ul className="nav">
        <Link to="/overview">
          <li className="item active">OVERVIEW</li>
        </Link>
        <Link to="/classes">
          <li className="item">classes</li>
        </Link>
      </ul>
      <ul className="navsecond">
        <li className="item active" onClick={() => setChartype("kd")}>
          Battle Royale
        </li>
        <li className="item" onClick={() => setChartype("win")}>
          CLASH
        </li>
      </ul>
      <div className="body">
        <div className="body-compcontent">
          <Char type={chartype} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Classes;
