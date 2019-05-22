import React from 'react' ;
import HeaderC from '../header/index';
import Navbar from '../navbar/index';
import './events.css'
import EventCard from './eventsCardComponent';
import EventList from '../eventContext/EventList';

export default class Events extends React.Component {
  render() {
    return (
      <div>
      <HeaderC/>
    <h1>Events</h1>
    <Navbar/>
   <img className="search" src="https://i.imgur.com/9PAikvm.png"/>
      <EventList />
      </div>
   )
  }
}
