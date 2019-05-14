import React from 'react' ;
import Login from '../login/login' ;
import SignUp from '../signUp/signUp' ;
import './landingPage.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class SignupLogin extends React.Component {
  render() {
    return (
      <div>
<h1>he</h1>
<Router>

        <Link  to="/signup"><button>Signup</button></Link>

        <Link to="/login/"><button>Login</button></Link>

      <Route path="/signup/" component={SignUp} />
      <Route path="/login/" component={Login} />





</Router>
      </div>

     )
  }
}
