import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignupLogin from "./landing-page/landing-page";
import { ParentSignup } from "./parent-signup-form/parent-signup";
import Login from "./login/login";
import Events from "./events/events";
import ParentProfile from './parentProfile/parentProfile'
import ParentInfo from './parentInfo/parentInfo'
import BookNowContainer from "./bookNow/bookNowContainer"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={SignupLogin} />
        <Route path="/events/" exact component={Events} />
        <Route path="/signup/" exact component={ParentSignup} />
        <Route path="/login/" exact component={Login} />
        <Route path="/profile/" exact component={ParentProfile} />
        <Route path="/parentinfo/" exact component={ParentInfo} />
        <Route path="/booknow/" exact component={BookNowContainer} />

      </Router>
    );
  }
}

export default App;
