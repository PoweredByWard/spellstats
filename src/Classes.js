import "./App.css";
import top from "./icons/top.png";
import bottom from "./icons/bottom.png";
import React, { useState } from "react";
import Class from "./Class";
import { getClass } from "./utils/classesConvertor";
import { Link} from "react-router-dom";
import Header from "./header";

function Classes() {
  const [classes, setclasses] = useState({
    Conduit: {
      title: "Conduit",
      color: "rgb(10, 12, 36)",
      icon: getClass("Conduit"),
      level: "10",
      solo: "2",
      duo: "8",
      squad: "4",
      exiles: "53",
      assists: "14",
      kda: "4.43",
      survived: "9:34",
      damage: "574.21",
      playtime: "~2h 4m 14s",
      mostexiles: "16",
      mostassists: "9",
    },
    Frostborn: {
      title: "Frostborn",
      color: "rgb(7, 24, 42)",
      icon: getClass("Frostborn"),
      level: "10",
      solo: "2",
      duo: "8",
      squad: "4",
      exiles: "53",
      assists: "14",
      kda: "4.43",
      survived: "9:34",
      damage: "574.21",
      playtime: "~2h 4m 14s",
      mostexiles: "16",
      mostassists: "9",
    },
    Pyromancer: {
      title: "Pyromancer",
      color: "rgb(46, 21, 34)",
      icon: getClass("Pyromancer"),
      level: "10",
      solo: "2",
      duo: "8",
      squad: "4",
      exiles: "53",
      assists: "14",
      kda: "4.43",
      survived: "9:34",
      damage: "574.21",
      playtime: "~2h 4m 14s",
      mostexiles: "16",
      mostassists: "9",
    },
    Stoneshaper: {
      title: "Stoneshaper",
      color: "rgb(27, 2, 1)",
      icon: getClass("Stoneshaper"),
      level: "10",
      solo: "2",
      duo: "8",
      squad: "4",
      exiles: "53",
      assists: "14",
      kda: "4.43",
      survived: "9:34",
      damage: "574.21",
      playtime: "~2h 4m 14s",
      mostexiles: "16",
      mostassists: "9",
    },
    Tempes: {
      title: "Tempes",
      color: "rgb(96, 55, 7)",
      icon: getClass("Tempes"),
      level: "10",
      solo: "2",
      duo: "8",
      squad: "4",
      exiles: "53",
      assists: "14",
      kda: "4.43",
      survived: "9:34",
      damage: "574.21",
      playtime: "~2h 4m 14s",
      mostexiles: "16",
      mostassists: "9",
    },
    Toxicologist: {
      title: "Toxicologist",
      color: "rgb(7, 50, 2)",
      icon: getClass("Toxicologist"),
      level: "10",
      solo: "2",
      duo: "8",
      squad: "4",
      exiles: "53",
      assists: "14",
      kda: "4.43",
      survived: "9:34",
      damage: "574.21",
      playtime: "~2h 4m 14s",
      mostexiles: "16",
      mostassists: "9",
    },
  });

  return (
    <React.Fragment>
      <Header/>
      <ul className="nav">
        <Link to="/overview">
          <li className="item ">OVERVIEW</li>
        </Link>
        <Link to="/classes">
          <li className="item active">classes</li>
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
          <Class classinfo={classes.Conduit} />
          <Class classinfo={classes.Frostborn} />
          <Class classinfo={classes.Pyromancer} />
          <Class classinfo={classes.Stoneshaper} />
          <Class classinfo={classes.Tempes} />
          <Class classinfo={classes.Toxicologist} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Classes;
