import "./socials.css";
import React from "react";
import Twitter from "../icons/twitter.png"
import Instagram from "../icons/instagram.png"

function Socials(params) {
    return(
        <React.Fragment>
        <div className="socials-cont">
            <div className="socials-container">
                <div className="socials-left">
                    <h3 className="socials-left-title">Our Socials</h3>
                    <p className="socials-left-description">Join the SpellStats community for the latest updates and hot topic discussions of Spellbreak.</p>
                </div>
                <div className="socials-right">
                    <a href="https://twitter.com/spellstats" target="new" className="socials-twitter"><img alt=""  className="socials-twitter-logo" src={Twitter} /></a>
                    <a href="https://www.instagram.com/spellstats" target="new" className="socials-instagram"><img alt=""  className="socials-instagram-logo" src={Instagram} /></a>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}
export default Socials;