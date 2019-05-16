import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StyledButton } from "../button/index";


import "./index.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <StyledButton name="profile" url="/profile/" />
          <StyledButton name="events" url="/events/" />
          <StyledButton name="info" url="/info/" />
        </div>

      </Router>
    );
  }
}
