import "./leaderboards.css";
import React from "react";
import Navigation from "./Navigation";
import Row from "./row";
import Location from "../icons/location.png";
import Leaderboard from "../icons/leaderboard.png";

function Leaderboards(params) {
  return (
    <React.Fragment>
      <Navigation Leaderboards="" />
      <div className="body-content">
        <div className="leaderboard-container">
          <div className="leaderboard-combo-content">
            <div className="comboboxsecond-container">
              <div className="comboboxsecond">
                <div className="comboboxsecond-content">
                  <span className="combobox-content-top">Classes</span>
                  <span className="combobox-content-bottom">All</span>
                </div>
              </div>
            </div>
            <div className="comboboxsecond-container">
              <div className="comboboxsecond">
                <div className="comboboxsecond-content">
                  <span className="combobox-content-top">Stat</span>
                  <span className="combobox-content-bottom">Wins</span>
                </div>
              </div>
            </div>
          </div>
          <div className="leaderboard-title-container">
            <div className="leaderboard-title">
              <img src={Leaderboard} className="leaderboard-icon" />
              <h1 className="leaderboard-title-content">Wins Leaderboard</h1>
            </div>
          </div>
          <table className="table">
            <thead className="thead">
              <tr className="tr">
                <th className="th center">Rank</th>
                <th className="th left">Player</th>
                <th className="th right">Level</th>
                <th className="th right">Matches Played</th>
              </tr>
            </thead>
            <tbody className="tbody">
              <Row rank="1" player="powered" level="1" mp="10" />
            </tbody>
          </table>
        </div>
        <div className="region-container">
          <div className="region-title-container">
            <img src={Location} className="region-icon" />
            <h3 className="region-title">Region Filters</h3>
          </div>
          <div className="region-description">
            <div className="combobox">
              <div className="combobox-content">Choose a region</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Leaderboards;
