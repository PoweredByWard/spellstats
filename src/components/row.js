import React from "react";

function Row(params) {
  return (
    <tr className="trb">
      <td className="rank">{params.rank}</td>
      <td className="player">{params.player}</td>
      <td className="level">{params.level}</td>
      <td className="matchesplayed">{params.mp}</td>
    </tr>
  );
}

export default Row;