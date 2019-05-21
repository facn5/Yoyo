import React from 'react' ;
import HeaderC from '../header/index';
import Navbar from '../navbar/index';
import './events.css'
import Events from './eventsCardComponent';

export default class Events extends React.Component {
  render() {
    return (
      <div>
      <HeaderC/>
    <h1>Events</h1>
    <Navbar/>
   <div className="twobuttons">
   <button className="next">This Week:12-19 May</button>   <button>Next Week:19-26May </button>
   </div>
  <EventCard time="time" name="name" age="age"/>
   <img className="search" src="https://i.imgur.com/9PAikvm.png"/>
      <h1>Hello from events</h1>
      <HeaderC />
      <Navbar />
      <div className="titles">
      <h1>time</h1>
      <h1>name</h1>
      <h1>ages</h1>
      </div>
      <EventCard name="name" ages="ages" time="time" />
      </div>
   )
  }
}
