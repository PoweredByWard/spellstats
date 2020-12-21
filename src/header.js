import React, { useState } from "react";
import "./App.css";
import top from "./icons/top.png";
import bottom from "./icons/bottom.png";
import Stat from "./Stat";
import { getClass } from "./utils/classesConvertor";

function Header(props) {
    const [user] = useState({
        name: "Powered",
        sub: "#3343",
        class: "Frostborn",
        level: "21",
        wins: "420",
        winrate: "69%",
        platform: "XBOX 360",
        region: "Africa",
      });
  return (
    <div className="header">
      <div className="header-content">
        <div className="decorationtop">
          <img src={top} alt="" />
        </div>
        <div className="topcontainter">
          <img className="classicon" src={getClass(user.class)} alt="" />
          <div className="player-info">
            <span className="platform">
              {user.platform} - {user.region}
            </span>
            <span className="playername">
              Powered<span className="sub">#3343</span>
            </span>
          </div>
        </div>
        <ul className="infobox-container">
          <Stat title="MOST USED CLASS" value={user.class} />
          <Stat title="LEVEL" value={user.level} />
          <Stat title="WINS" value={user.wins} />
          <Stat title="WINRATE" value={user.winrate} />
        </ul>
        <div className="decorationbottom">
          <img src={bottom} alt=""  />
        </div>
      </div>
    </div>
  );
}
export default Header;