import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignupLogin from "./landing-page/landing-page";
import {ParentSignup}  from "./parent-signup-form/parent-signup";
import ParentProfile  from "./parentProfile/parentProfile";
import Login from "./login/login";
import Events from "./events/events";

class App extends Component {
  render() {
    return (
      <Router >
      <Switch>
        <Route path='/' exact component={SignupLogin} />
        <Route path="/events" exact component={Events} />
        <Route path="/signup" exact component={ParentSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={ParentProfile} />

        </Switch>
      </Router>
    );
  }
}

export default App;
