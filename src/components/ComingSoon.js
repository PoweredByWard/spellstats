import "./App.css";
import React from "react";
import Header from "./header";
import twitter from "../icons/twitter.png";
import Footer from "./footer";
function comingSoon(params) {
  return (
    <React.Fragment>
      <Header />
      <div className="body">
        <div className="body-compcontent">
            <h2>SpellStats is currently under development.</h2>
            <h4>For more info please frein to our social:</h4>
            <div className="socialsContainer">
                <a href="https://twitter.com/spellstats"><img alt="" src={twitter} className="social" /></a>

            </div>
            <h4>Spellbreak trailer:</h4>
            <div className="yt">
            <iframe width="720" height="400" title="trailer"  src="https://www.youtube.com/embed/pSmvbSFUDf8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default comingSoon;
