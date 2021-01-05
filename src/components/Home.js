import "./home.css";
import React, { useState } from "react";
import logo from "../icons/logosearch.png";
import spellstats from "../icons/logosearch2.png";
import background from "../icons/logospell.jpg";
import player from "../icons/logospell.jpg";
import gauntlet from "../icons/gauntlet.png";
import update from "../icons/update.png";
import Update from "./Update";
import Noti from "./Noti";
import Socials from "./Socials";
import { getClass } from "../utils/classesConvertor";
import Navigation from "./Navigation";

//import Class from "./Class";
//import { getClass } from "./utils/classesConvertor";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Home() {
  const [updates] = useState([
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
    <Update
      version="1.01"
      description="SpellStats Official release!"
      img={background}
      alt=""
    />,
  ]);
  const [amount, setAmount] = useState(4);
  let shownUpdates = [];
  for (var i = 0; i < amount; i++) {
    shownUpdates.push(updates[i]);
  }
  return (
    <React.Fragment>
      {
        //<Noti />
      }
      <div className="body">
        <Navigation Home=""/>
        <div className="background">
          <div className="cover">
            <div className="cover-content">
              <div className="search">
                <div className="search-title">
                  <h1 className="search-title-content">Spellbreak Stats</h1>
                </div>
                <div className="searchbar-container">
                  <div className="searchlogocontainer">
                    <img alt="" src={spellstats} className="logosearch" />
                  </div>

                  <form action="post">
                    <input
                      className="searchbar"
                      placeholder="Enter Spellbreak Username"
                      type="search"
                    />
                  </form>
                </div>
                <h3 className="tracked-players">0 Players Tracked</h3>
              </div>
              <div className="leaders">
                <div className="card">
                  <Link to="/overview" className="card-logo-container">
                    <img alt="" className="card-logo" src={player} />
                  </Link>
                  <div className="user-info">
                    <Link to="/" className="username-container">
                      <img alt="" src={logo} className="logousername" />
                      <span className="name-container">
                        <span className="name-user">User</span>
                        <span className="name-sub">#0001</span>
                      </span>
                    </Link>
                    <Link className="view-leaderboard">View Leaderboard</Link>
                  </div>
                  <Link className="user-stats">
                    <span className="user-stats-name">Exiles</span>
                    <span className="user-stats-value">0</span>
                  </Link>
                </div>
                <div className="main card">
                  <Link to="/overview" className="card-logo-container">
                    <img alt="" className="card-logo" src={player} />
                  </Link>
                  <div className="user-info">
                    <Link to="/" className="username-container">
                      <img alt="" src={logo} className="logousername" />
                      <span className="name-container">
                        <span className="name-user">User</span>
                        <span className="name-sub">#0001</span>
                      </span>
                    </Link>
                    <Link className="view-leaderboard">View Leaderboard</Link>
                  </div>
                  <Link className="user-stats">
                    <span className="user-stats-name">Wins</span>
                    <span className="user-stats-value">0</span>
                  </Link>
                </div>
                <div className="card">
                  <Link to="/overview" className="card-logo-container">
                    <img alt="" className="card-logo" src={player} />
                  </Link>
                  <div className="user-info">
                    <Link to="/" className="username-container">
                      <img alt="" src={logo} className="logousername" />
                      <span className="name-container">
                        <span className="name-user">User</span>
                        <span className="name-sub">#0001</span>
                      </span>
                    </Link>
                    <Link className="view-leaderboard">View Leaderboard</Link>
                  </div>
                  <Link className="user-stats">
                    <span className="user-stats-name">Damage Done</span>
                    <span className="user-stats-value">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="meta">
            <div className="meta-container">
              <div className="meta-container-left">
                <h2 className="meta-title">
                  <img alt="" src={gauntlet} className="meta-logo" />
                  Mastery Meta
                </h2>
                <p className="meta-description">
                  Mastery Meta data is sampled from all tracked player data
                  across all playlists for usage and kills per match.
                </p>
                <Link>
                  <div className="viewallbtn">View All Masteries</div>
                </Link>
              </div>
              <div className="meta-container-right">
                <div className="meta-item">
                  <img
                    alt=""
                    src={getClass("tempes")}
                    className="meta-item-image"
                  />
                  <div className="meta-item-name">Tempes</div>
                  <div className="meta-item-stats">
                    <div className="meta-item-stat">Usage 11.4%</div>
                    <div className="meta-item-stat">KPM 2.7</div>
                  </div>
                </div>
                <div className="meta-item">
                  <img
                    alt=""
                    src={getClass("Conduit")}
                    className="meta-item-image"
                  />
                  <div className="meta-item-name">Conduit</div>
                  <div className="meta-item-stats">
                    <div className="meta-item-stat">Usage 11.4%</div>
                    <div className="meta-item-stat">KPM 2.7</div>
                  </div>
                </div>
                <div className="meta-item">
                  <img
                    alt=""
                    src={getClass("Frostborn")}
                    className="meta-item-image"
                  />
                  <div className="meta-item-name">Frostborn</div>
                  <div className="meta-item-stats">
                    <div className="meta-item-stat">Usage 11.4%</div>
                    <div className="meta-item-stat">KPM 2.7</div>
                  </div>
                </div>
                <div className="meta-item">
                  <img
                    alt=""
                    src={getClass("Stoneshaper")}
                    className="meta-item-image"
                  />
                  <div className="meta-item-name">Stoneshaper</div>
                  <div className="meta-item-stats">
                    <div className="meta-item-stat">Usage 11.4%</div>
                    <div className="meta-item-stat">KPM 2.7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addcontainer"></div>
        <div className="updates-container">
          <h2 className="updates-title">
            <img alt="" src={update} className="updates-logo" />
            Updates
          </h2>
          <div className="updates">{shownUpdates}</div>
          <div onClick={() => setAmount(amount + 8)} className="load-more">
            Load more
          </div>
        </div>
        <Socials />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
