import React from 'react';
import HeaderC from '../header/index';
import Navbar from '../navbar/index';
import './events.css';
import EventList from '../eventContext/EventList'

export default class Events extends React.Component {
  render() {
    return (<div>
      <HeaderC/>
      <h1>Events</h1>
      <Navbar/>
      <EventList />
    </div>)
  }
}
