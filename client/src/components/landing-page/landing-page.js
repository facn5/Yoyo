import React from 'react' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../login/login' ;
import {ParentSignup} from '../parent-signup-form/parent-signup';
import './landingPage.css';

export default class SignupLogin extends React.Component {
state = {landingPage: true};
landingPageStatus= () =>{

  this.setState({landingPage: false})
}
  render() {
    return (
      <div>
<Router>

        <Link  to="/signup"><button className={this.state.landingPage?"show":"hide"} onClick={this.landingPageStatus}>Signup</button></Link>

        <Link to="/login/"><button className={this.state.landingPage?"show":"hide"} onClick={this.landingPageStatus}>Login</button></Link>

      <Route path="/signup/" component={ParentSignup} />
      <Route path="/login/" component={Login} />





</Router>
      </div>

     )
  }
}
