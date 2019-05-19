import React from 'react' ;
import {EventCard} from './eventsCardComponent'
import HeaderC from '../header/index';
import Navbar from '../navbar/index';
import './eventsCardComponent.css' ;

export default class Events extends React.Component {


  render() {
    return (
      <div>
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
