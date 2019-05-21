import React from 'react';
import { Link } from "react-router-dom";
import './TOS.css';

export default class ParentTOS extends React.Component {
  render() {
    return(
      <div>
        <h1>Parent Rules</h1>
        <ul>
          <li>I will be present at all times to supervise my child under age 6</li>
          <li>I will arrive to class no later than 5 minutes prior to start
           and have my child ready to go on time.</li>
          <li>I will not take pictures or video of other parents or children
           without their permission.</li>
          <li>If I need to cancel, I understand with less than 48 hours notice
           I will be charged half the event fee, and less than 24 hours notice
          I will be charged the full event fee.</li>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="TOS"> Click to accept </button>
          </Link>
        </ul>
      </div>

    );
  }
}
