import React from "module";
import "./Footer.css";

function Footer(prefabs) {
  var today = new Date();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <span>{`© ${today.getFullYear()} SpellStats`}</span>
          <div className="footer-top-right">
            <a
              href="https://twitter.com/messages/compose?recipient_id=1341518237230641159"
              class="footer-item"
              data-screen-name="@SpellStats"
            >Support</a>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1341518237230641159"
              class="footer-item"
              data-screen-name="@SpellStats"
            >Jobs</a>
          </div>
        </div>
        <p className="footer-description">
        SpellStats isn't endorsed by Proletariat and doesn't reflect the views or opinions of Proletariat or anyone officially involved in producing or managing Proletariat properties. Proletariat, and all associated properties are trademarks or registered trademarks of Proletariat, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
