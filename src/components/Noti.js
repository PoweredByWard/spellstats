import React from "react";
import "./noti.css";
import Twitter from "../icons/twitter.png"
import Instagram from "../icons/instagram.png"

function Noti(params) {
    return(
    <div className="noti-background">
        <div className="noti-container">
            <h1 className="noti-title">
                🚧 Website is under Development 🚧
            </h1>
            <p className="noti-description">Join the SpellStats community for the latest updates and hot topic discussions of Spellbreak:</p>
            <div className="noti-socials">
            <a href="https://twitter.com/spellstats" target="new" className="noti-twitter"><img  alt="" className="noti-twitter-logo" src={Twitter} /></a>
            <a href="https://www.instagram.com/spellstats" target="new" className="noti-instagram"><img  alt="" className="noti-instagram-logo" src={Instagram} /></a>
            </div>
        </div>
    </div>
    )
}
export default Noti;