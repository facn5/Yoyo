import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../login/login";
import { ParentSignup } from "../parent-signup-form/parent-signup";
import "./landingPage.css";
import Events from "../events/events";

export default class SignupLogin extends React.Component {
  state = { landingPage: true };
  landingPageStatus = () => {
    this.setState({ landingPage: false });
  };
  render() {
    return (
  <div>
        <Router>
<div className="main-container">

<div className="image">
<img src="https://user-images.githubusercontent.com/32282170/57733684-01464600-7698-11e9-89e7-b9debad0bee0.png"/>
</div>

          <Link to="/signup" onClick={this.landingPageStatus}  className={this.state.landingPage?"show":"hide"} style={{ textDecoration: 'none' }}>
            <button className="signup" >
              Signup
            </button>
          </Link>

          <Link to="/login/"      className={this.state.landingPage ? "show" : "hide"}
                                  onClick={this.landingPageStatus}
                                  style={{ textDecoration: 'none' }}>
            <button className="login" >
              Login
            </button>
          </Link>
          <Route path="/event" component={Events} />
          <Route path="/signup/" component={ParentSignup} />
          <Route path="/login/" component={Login} />
          </div>
        </Router>
        </div>
    );
  }
}
