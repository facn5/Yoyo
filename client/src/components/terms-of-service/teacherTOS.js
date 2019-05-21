import React from 'react';
import { Link } from "react-router-dom";
import './TOS.css';

export default class TeacherTOS extends React.Component {
  render(){
    return (
      <div>
        <h1>Teacher Rules</h1>
        <ul>
          <li>I certify that all information I give to yoyo app is correct
           and up to date at all times.</li>
          <li>I will reserve for adequate space for the activities I am offering.</li>
          <li>I will arrive to the location no later than 10 minutes prior to the
           start of each session.  I will begin and end on time.</li>
          <li>I will not cancel events on less than 48 hours' notice except
          in case of emergency or illness.</li>
          <li>I will not meet or contact any children outside of the events
           or classes.  This includes via email, social media, text message,
         phone call, or any other channel.</li>
          <li>I will not take pictures or video of parents or children without
           permission.</li>
        </ul>

        <Link to="/teacherSignup" style={{ textDecoration: "none"}}>
        <button className="TOS">Click to accept</button>
        </Link>

      </div>
    )
  }
}
