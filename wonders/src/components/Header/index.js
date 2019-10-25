import React from "react";
import "./header.css";
import ScoreMessage from "../ScoreMessage";

const Header = props => (
  <div className="header">
    <ul>
      <li>
        <h2 className=" title animated swing">Wonders Clicky Game</h2>
      </li>
      <ScoreMessage score={props.score} topScore={props.topScore} />
      <li id="score">
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </div>
);

export default Header;
