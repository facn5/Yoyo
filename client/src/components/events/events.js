import React from 'react' ;
import {EventCard} from './eventsCardComponent'
import HeaderC from '../header/index';
import Navbar from '../navbar/index';
import './events.css';
import EventCard from './eventsCardComponent';

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
  <EventCard time={time} name={name} age={age}/>
   <img className="search" src="https://i.imgur.com/9PAikvm.png"/>

      </div>

     )
  }
}
