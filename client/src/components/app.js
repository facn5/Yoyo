import React, { Component } from 'react';
import SignupLogin from './landing-page/landing-page'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppRouter from './routes.js';

class App extends Component {
  render() {
    return (
      <div>

   <h1>React and Webpack/Babel setup</h1>
      <SignupLogin />
      <AppRouter />
</div>
    )
  }
}

export default App;
