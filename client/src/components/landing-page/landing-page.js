import React from 'react' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../login/login' ;
import {ParentSignup} from '../parent-signup-form/parent-signup';
import './landingPage.css';

export default class SignupLogin extends React.Component {
  render() {
    return (
      <div>
<Router>

        <Link  to="/signup"><button>Signup</button></Link>

        <Link to="/login/"><button>Login</button></Link>

      <Route path="/signup/" component={ParentSignup} />
      <Route path="/login/" component={Login} />





</Router>
      </div>

     )
  }
}
