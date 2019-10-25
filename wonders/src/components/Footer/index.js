import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="bottom">
      <ul id="footer-list">
        <li>
          <i className="fab fa-react fa-2x"></i>
          Clicky Game!
        </li>
        <li>© 2019 Wendy Alers</li>
        <li>
          <a
            href="https://github.com/lookwendyican/Wonders_Clicky_Game"
            target="blank"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
