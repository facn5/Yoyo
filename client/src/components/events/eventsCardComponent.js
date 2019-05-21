import React from 'react' ;
import './eventsCardComponent.css'

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
  <button className="three-columns">
  <pre>{this.state.time}</pre>
  <pre>{this.state.name}</pre>
  <pre>{this.state.age}</pre>
  </button>


  </div>

);
}
}
