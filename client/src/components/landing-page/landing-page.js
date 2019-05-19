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
          <Link
            to="/signup"
            style={{
              textDecoration: "none"
            }}
          >
            <button className="signup"> Signup </button>
          </Link>
          <Link
            to="/login/"
            onClick={this.landingPageStatus}
            style={{
              textDecoration: "none"
            }}
          >
            <button className="login"> Login </button>
          </Link>
        </div>
      </div>
    );
  }
}
