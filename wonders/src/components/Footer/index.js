import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="bottom">
      <ul id="footer-list">
        <li>
          <span>
            <img
              className="logo"
              id="reactLogo"
              src="assets/images/react-logo.png"
              alt=""
            />
          </span>{" "}
          Clicky Game!
        </li>
        <li>© 2019 Wendy Alers</li>
        <li>
          <a href="https://github.com/evanejtucker/clicky-game" target="blank">
            <span>
              <img className="logo" src="assets/images/github.png" alt="" />
            </span>{" "}
            Github
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
