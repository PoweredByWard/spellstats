import React from "react";
import "./App.css";
import TimeIcon from "./icons/timeicon.png";
import kda from "./icons/kda.png";
import { Link } from "react-router-dom";

function Class(props) {
  return (
    <div className="class">
      <div
        className="class-header"
        style={{ backgroundColor: props.classinfo.color }}
      >
        <span className="class-title">{props.classinfo.title}</span>
        <span className="class-title-right">Rank {props.classinfo.level}</span>
      </div>
      <div className="class-body">
        <img
          className="class-icon"
          src={props.classinfo.icon}
          alt=""
          style={{ borderColor: props.classinfo.color }}
        />
        <div className="class-content">
          <div className="class-row">
            <div className="class-row-item">
              <img src={TimeIcon} alt="" className="timeicon" />
              <span className="class-row-title">Played </span>
              <span className="class-row-value">
                {props.classinfo.playtime}
              </span>
            </div>
            <div className="class-row-item">
              <img src={kda} alt="" className="timeicon" />
              <span className="class-row-value">{props.classinfo.exiles}</span>
              <span className="class-row-title"> Exiles </span>
            </div>
            <div className="class-row-item">
              <img src="" alt="" className="timeicon" />
              <span className="class-row-value">{props.classinfo.exiles}</span>
              <span className="class-row-title"> Assists </span>
            </div>
            <div className="class-row-item">
              <img src="" alt="" className="timeicon" />
              <span className="class-row-value">{props.classinfo.exiles}</span>
              <span className="class-row-title"> Matches played </span>
            </div>
          </div>
          <div className="class-stats-row">
            <div className="class-stats-row-halfitem">
              <div className="class-stats-row-halfitem-content">
                <div className="class-stats-row-title">
                  <span>Wins</span>
                </div>
              </div>
              <div className="class-stats-row-content-three">
                <div className="class-stats-row-content-value">
                  <span>{props.classinfo.solo}</span>
                </div>
                <div className="class-stats-row-content-title">
                  <span>Solo Wins</span>
                </div>
                <div className="class-stats-row-content-link">
                  <span>
                    <Link className="link" to="/leaderboards/solowins">
                      (Go to leaderboard)
                    </Link>
                  </span>
                </div>
              </div>
              <div className="class-stats-row-content-three">
                <div className="class-stats-row-content-value">
                  <span>{props.classinfo.duo}</span>
                </div>
                <div className="class-stats-row-content-title">
                  <span>Duo Wins</span>
                </div>
                <div className="class-stats-row-content-link">
                  <span>
                    <Link className="link" to="/leaderboards/duowins">
                      (Go to leaderboard)
                    </Link>
                  </span>
                </div>
              </div>
              <div className="class-stats-row-content-three">
                <div className="class-stats-row-content-value">
                  <span>{props.classinfo.squad}</span>
                </div>
                <div className="class-stats-row-content-title">
                  <span>Squad Wins</span>
                </div>
                <div className="class-stats-row-content-link">
                  <span>
                    <Link className="link" to="/leaderboards/squadwins">
                      (Go to leaderboard)
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="class-stats-row-halfitem">
              <div className="class-stats-row-halfitem-content">
                <div className="class-stats-row-title">
                  <span>Most Per Game</span>
                </div>
              </div>
              <div className="class-stats-row-content">
                <div className="class-stats-row-content-value">
                  <span>{props.classinfo.mostexiles}</span>
                </div>
                <div className="class-stats-row-content-title">
                  <span>Exiles</span>
                </div>
                <div className="class-stats-row-content-link">
                  <span>
                    <Link className="link" to="/leaderboards/gamerecord/exiles">
                      (Go to leaderboard)
                    </Link>
                  </span>
                </div>
              </div>
              <div className="class-stats-row-content">
                <div className="class-stats-row-content-value">
                  <span>{props.classinfo.mostassists}</span>
                </div>
                <div className="class-stats-row-content-title">
                  <span>Assists</span>
                </div>
                <div className="class-stats-row-content-link">
                  <span>
                    <Link
                      className="link"
                      to="/leaderboards/gamerecord/assists"
                    >
                      (Go to leaderboard)
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="class-stats-row">
            <div className="class-stats-row-item">
              <div className="class-stats-row-halfitem-content">
                <div className="class-stats-row-title">
                  <span className="class-stats-row-bottom">Game Averages</span>
                  <div className="class-stats-row-content-three-bottom">
                    <div className="class-stats-row-content-value">
                      <span>{props.classinfo.mostexiles}</span>
                    </div>
                    <div className="class-stats-row-content-title">
                      <span>Exiles</span>
                    </div>
                    <div className="class-stats-row-content-link">
                      <span>
                        <Link
                          className="link"
                          to="/leaderboards/averages/exiles"
                        >
                          (Go to leaderboard)
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="class-stats-row-content-three-bottom">
                    <div className="class-stats-row-content-value">
                      <span>{props.classinfo.mostexiles}</span>
                    </div>
                    <div className="class-stats-row-content-title">
                      <span>Assists</span>
                    </div>
                    <div className="class-stats-row-content-link">
                      <span>
                        <Link
                          className="link"
                          to="/leaderboards/averages/exiles"
                        >
                          (Go to leaderboard)
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="class-stats-row-content-three-bottom">
                    <div className="class-stats-row-content-value">
                      <span>{props.classinfo.damage}</span>
                    </div>
                    <div className="class-stats-row-content-title">
                      <span>Damage Done</span>
                    </div>
                    <div className="class-stats-row-content-link">
                      <span>
                        <Link
                          className="link"
                          to="/leaderboards/averages/damage"
                        >
                          (Go to leaderboard)
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="class-stats-row-content-three-bottom">
                    <div className="class-stats-row-content-value">
                      <span>{props.classinfo.survived}</span>
                    </div>
                    <div className="class-stats-row-content-title">
                      <span>Time Alive</span>
                    </div>
                    <div className="class-stats-row-content-link">
                      <span>
                        <Link
                          className="link"
                          to="/leaderboards/averages/survived"
                        >
                          (Go to leaderboard)
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
