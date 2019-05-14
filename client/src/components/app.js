import React, { Component } from 'react';
import HeaderC from './header/index';
import Navbar from './navbar/index';

class App extends Component {
  render() {
    return (
      <div>
       <HeaderC/>
      <Navbar/>
      </div>
    )
  }
}

export default App;
