import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderC from '../header/index';
import Navbar from '../navbar/index';
import './info.css';

export default class ParentInfo extends React.Component {
state = {
name:"Fadi",
age:"One",
suggestion:"Baby Dabke",
};
  render() {
    return (
      <div>
      <div>
      <HeaderC/>
            <Navbar/>
            <h1>Parent's Desk</h1>
            <h1>This Age </h1>
            <div className="Info">
            <p className="age-info">{this.state.name} is {this.state.age} years old and is learning to understand sequences of events.  {this.state.name} will watch you do everything from drinking a cup of tea to doing the laundry.  Explain the sequence of events to {this.state.name} as you are doing things.  Games and activities that can help {this.state.name} development during this period include:

Singing and music with movement
Conversation
Household chores
Personal care
Drawing</p>
<h1>Suggestions</h1>
<p className="suggestion" >
{this.state.suggestion}
</p>
            </div>
            </div>
    </div>
     )
  }
}
