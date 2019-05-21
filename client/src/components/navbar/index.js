import React from "react";
import { StyledButton } from "../button/index";


import "./index.css";

export default class Navbar extends React.Component {
  render() {
    return (
  <>
        <div className="navbar">
          <StyledButton name="profile" url="/profile/" />
          <StyledButton name="events" url="/events/" />
          <StyledButton name="info" url="/parentinfo/" />
        </div>
</>

    );
  }
}
