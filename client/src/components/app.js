import React, { Component } from 'react';

import HeaderC from './header/index';
import Navbar from './navbar/index';
import SignupLogin from './landing-page/landing-page';



class App extends Component {
  render() {
    return (
      <div>
      <div>
       <HeaderC/>
      <Navbar/>
      </div>
      <SignupLogin />
</div>

    )
  }
}

export default App;
