import React from "module";
import "./App.css";

function Footer(prefabs){
    var today = new Date();
    return(
        <div className="footer">
            <p>{`© ${today.getFullYear()} SpellStats`}</p>
        </div>
    )
}

export default Footer;
