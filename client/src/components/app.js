import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignupLogin from "./landing-page/landing-page";
import ParentSignup  from "./parent-signup-form/parent-signup";
import ParentProfile  from "./parentProfile/parentProfile";
import ParentInfo  from "./parentInfo/parentInfo";
import Login from "./login/login";
import TeacherSignUp from "./teacher-signup-form/teacher-signup";
import Events from "./events/events";
import BookNowContainer from "./bookNow/bookNowContainer";
import ParentTOS from "./terms-of-service/parentTOS";
import TeacherTOS from "./terms-of-service/teacherTOS";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={SignupLogin} />
        <Route path="/events" exact component={Events} />
        <Route path="/signup" exact component={ParentSignup} />
        <Route path="/login" exact component={Login} />
        <Route path="/teacherSignUp" exact component={TeacherSignUp} />
        <Route path="/teacherLogIn" exact component={Login} />
        <Route path="/profile" exact component={ParentProfile} />
        <Route path="/parentinfo" exact component={ParentInfo} />
        <Route path="/booknow" exact component={BookNowContainer} />
        <Route path="/parentTOS" exact component={ParentTOS} />
        <Route path="/teacherTOS" exact component={TeacherTOS} />
      </Router>
    );
  }
}

export default App;
