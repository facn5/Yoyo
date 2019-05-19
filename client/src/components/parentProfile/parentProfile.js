import React from 'react' ;
import HeaderC from "../header/index";
import Navbar from "../navbar/index";

export default class ParentProfile extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello from parentProfile</h1>
      <HeaderC />
      <Navbar />
      </div>

     )
  }
}
