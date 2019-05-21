import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

export default class SignupLogin extends React.Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div className="image">
            <img src="https://user-images.githubusercontent.com/32282170/57733684-01464600-7698-11e9-89e7-b9debad0bee0.png" />
          </div>
          <Link to="/parentTOS" style={{ textDecoration: "none" }}>
            <button className="signup"> Parent Signup </button>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="login"> Parent Login </button>
          </Link>

          <Link to="/teacherTOS" style={{ textDecoration: "none" }}>
            <button className="signup"> Teacher Sign-up </button>
          </Link>

          <Link to="/teacherLogIn" style={{ textDecoration: "none" }}>
            <button className="login"> Teacher Login </button>
          </Link>
        </div>
      </div>
    );
  }
}
