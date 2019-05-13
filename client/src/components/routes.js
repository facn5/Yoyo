import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupLogin from './landing-page/landing-page' ;
import LandingPage from './landing-page/landing-page' ;
function landingPage() {
  return <h2>Landing page </h2>;
}

function signUp() {
  return <h2>SignUp</h2>;
}

function login() {
  return <h2>Login</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing-Page</Link>
            </li>
            <li>
              <Link to="/login/">login</Link>
            </li>
            <li>
              <Link to="/signup/">Sign up</Link>
            </li>
          </ul>
        </nav>

        <Route path="/Landing-page/" exact component={SignupLogin} />
        <Route path="/about/" component={signUp} />
        <Route path="/users/" component={login} />
      </div>
    </Router>
  );
}

export default AppRouter;
