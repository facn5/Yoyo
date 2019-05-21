import React from 'react' ;
import HeaderC from '../header/index';
import Navbar from "../navbar/index";
import './profile.css';


export default class ParentProfile extends React.Component {
  state={
    name:"Shadi",
    birth:"1 january 2008",
    language:"Arabic",
    superpower:"Swimming",
    specialneed:"Speech Therapy",
    curevents:"Coding Bootcamp,Flying"
  };
  render() {
    return (
      <div>

      <HeaderC/>
            <h1>Parent's Desk</h1>
            <Navbar/>
      <div className="Card-Info">
    <pre>Name:{this.state.name}</pre>
    <pre>Birth Date:{this.state.birth}</pre>
    <pre>Languages:{this.state.language}</pre>
    <pre>Superpowers:{this.state.superpower}</pre>
    <pre>Special Needs:{this.state.specialneed}</pre>
    <pre>Current Events:{this.state.curevents}</pre>
    <button>Logout</button>
      </div>

      </div>

     )
  }
}
