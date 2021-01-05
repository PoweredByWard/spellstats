import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation(params) {
  let active = {
    Home: "",
    Leaderboards: "",
    Meta: "",
    News: "",
    Support: "",
    Partners: "",
  };
  if (params.hasOwnProperty("Home")) {
    active.Home = "nav-main nav-active";
  } else {
    active.Home = "nav-item";
  }
  if (params.hasOwnProperty("Leaderboards")) {
    active.Leaderboards = "nav-main nav-active";
  } else {
    active.Leaderboards = "nav-item";
  }
  if (params.hasOwnProperty("Meta")) {
    active.Meta = "nav-main nav-active";
  } else {
    active.Meta = "nav-item";
  }
  if (params.hasOwnProperty("News")) {
    active.News = "nav-main nav-active";
  } else {
    active.News = "nav-item";
  }
  if (params.hasOwnProperty("Support")) {
    active.Support = "nav-main nav-active";
  } else {
    active.Support = "nav-item";
  }
  if (params.hasOwnProperty("Partners")) {
    active.Partners = "nav-main nav-active";
  } else {
    active.Partners = "nav-item";
  }
  return (
    <div className="nav-cont">
      <nav className="nav">
        <ul className="nav-items">
          <div className="nav-search">
            <div className="nav-search-content">
              <form className="nav-form" name="Search">
                <div className="search-input-box">
                  <input
                    placeholder="Search Profile"
                    type="text"
                    name=""
                    className="nav-search-input"
                  />
                  <input
                    type="submit"
                    value=""
                    id="submit"
                    className="search-icon"
                  />
                </div>
              </form>
            </div>
          </div>

          <li className="nav-item-cont">
            <Link to="/" className={active.Home}>
              Home
            </Link>
          </li>
          <li className="nav-item-cont">
            <Link to="/leaderboards" className={active.Leaderboards}>
              Leaderboards
            </Link>
          </li>
          <li className="nav-item-cont">
            <Link to="/meta" className={active.Meta}>
              Meta
            </Link>
          </li>
          <li className="nav-item-cont">
            <Link to="/news" className={active.News}>
              News
            </Link>
          </li>
          <li className="nav-item-cont">
            <Link to="/support" className={active.Support}>
              Support
            </Link>
          </li>
          <li className="nav-item-cont">
            <Link to="/partners" className={active.Partners}>
              Partners
            </Link>
          </li>
        </ul>
        <div className="nav-right">
          <Link to="/login" className="nav-login" >Login</Link>
          <Link to="/register" className="nav-register" >Register</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
