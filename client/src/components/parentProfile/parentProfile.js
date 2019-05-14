import React from 'react' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Events from '../events/events'
import ParentInfo from '../parentInfo/parentInfo'
export default class ParentProfile extends React.Component {
  render() {
    return (
      <div>
      <Router>
      <li>
        <Link to="/parentProfile"><button>Parent profile</button></Link>
      </li>
      <li>
        <Link to="/events"><button>Events</button></Link>
      </li>
      <li>
        <Link to="/parent-info/"><button>Parent Info</button></Link>
      </li>
      <Route path="/parentProfile/" component={ParentProfile} />
      <Route path="/events/" component={Events} />
      <Route path="/parent-info/" component={ParentInfo} />
      <h1>Hello from parentProfile</h1>
      </Router>
      </div>

     )
  }
}
