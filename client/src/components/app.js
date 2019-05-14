import React, { Component } from 'react';

import HeaderC from './header/index';
import Navbar from './navbar/index';
import SignupLogin from './landing-page/landing-page';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
MainComponent
       <HeaderC/>
      <Navbar/>
      </div>
      <SignupLogin />
</div>

    )
  }
}

export default App;
