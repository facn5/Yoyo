import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import SignupLogin from "./landing-page/landing-page";
import {ParentSignup}  from "./parent-signup-form/parent-signup";
import Login from "./login/login";
import Events from "./events/events";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={SignupLogin} />
        <Route path="/event" exact component={Events} />
        <Route path="/signup" exact component={ParentSignup} />
        <Route path="/login" exact component={Login} />
      </Router>
    );
  }
}

export default App;
