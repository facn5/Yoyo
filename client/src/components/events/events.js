import React from 'react' ;
import HeaderC from '../header/index';
import Navbar from '../navbar/index';

import './events.css'

export default class Events extends React.Component {


  render() {
    return (
      <div>
      <HeaderC/>
    <h1>Parent's Desk</h1>
    <Navbar/>
   <div className="twobuttons">
   <button className="next">This Week:12-19 May</button>   <button>Next Week:19-26May </button>
   </div>
   <br/>
   <div className="Event-Card">
   <p>Sunday, 13th of May</p>
   <div className="three-columns">
    <p>2-4pm</p>
    <p>Peanuts Football</p>
    <p>age 6-10</p>
   </div>
   <div className="three-columns">
    <p>6-10pm</p>
    <p>Ammo Roni</p>
    <p>age 4-10</p>
   </div>
   </div>
   <div className="Event-Card">
   <p>Sunday, 14th of May</p>
   <div className="three-columns">
    <p>2-4pm</p>
    <p>Peanuts Football</p>
    <p>age 6-10</p>
   </div>
   <div className="three-columns">
    <p>6-10pm</p>
    <p>Ammo Roni</p>
    <p>age 4-10</p>
   </div>
   </div>
   <div className="Event-Card">
   <p>Sunday, 15th of May</p>
   <div className="three-columns">
    <p>2-4pm</p>
    <p>Peanuts Football</p>
    <p>age 6-10</p>
   </div>
   <div className="three-columns">
    <p>6-10pm</p>
    <p>Ammo Roni</p>
    <p>age 4-10</p>
   </div>
   </div>
   <img className="search" src="https://i.imgur.com/9PAikvm.png"/>

      </div>

     )
  }
}
