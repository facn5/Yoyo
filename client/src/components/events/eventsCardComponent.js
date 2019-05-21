import React from 'react' ;
import './eventsCardComponent.css'

export default class Events extends React.Component {
  render() {
    return (
  <div className="event-card">
  <p>{this.props.day}</p>
  <button className="three-columns">
  <pre>{this.props.time}</pre>
   <pre>{this.props.name}</pre>
  <pre>{this.props.age}</pre>
  </button>


  </div>

);
}
}
