import React from "module";
import "./App.css";

function Footer(prefabs) {
  var today = new Date();
  return (
    <div className="footer">
      <ul className="footer-container">
        <li><a
          href="https://twitter.com/messages/compose?recipient_id=1341518237230641159"
          class="twitter-dm-button"
          data-screen-name="@SpellStats"
        >
          Contact us
        </a></li>
      </ul>
      <p>{`© ${today.getFullYear()} SpellStats. All Rights Reserved`}</p>
    </div>
  );
}

export default Footer;
