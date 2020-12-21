import "./App.css";
import React, { useState } from "react";
import Class from "./Class";
import { getClass } from "./utils/classesConvertor";
import { Link} from "react-router-dom";
import Header from "./header";

function Classes() {
  return (
    <React.Fragment>
      <Header/>
      <ul className="nav">
        <Link to="/overview">
          <li className="item active">OVERVIEW</li>
        </Link>
        <Link to="/classes">
          <li className="item">classes</li>
        </Link>
      </ul>
      <ul className="navsecond">
        <a href="">
          <li className="item active">Battle Royale</li>
        </a>
        <a href="">
          <li className="item">CLASH</li>
        </a>
      </ul>
      <div className="body">
        <div className="body-compcontent">
            
        </div>
      </div>
    </React.Fragment>
  );
}

export default Classes;
