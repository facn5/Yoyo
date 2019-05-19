import React from 'react' ;
import './card.css'

export default class Events extends React.Component {
  state = {
    day:"Sunday, 13th of May",
    name:"Peanuts Football",
    time:"2pm-4pm",
    age:"6-10",
  };
  render() {
    return (
  <div className="event-card">
  <p>{this.state.day}</p>
  <div className="three-columns">
  <p>{this.state.time}</p>
  <p>{this.state.name}</p>
  <p>{this.state.age}</p>
  </div>
  <div className="three-columns">
  <p>{this.state.time}</p>
  <p>{this.state.name}</p>
  <p>{this.state.age}</p>
  </div>
  </div>

);
}
}
