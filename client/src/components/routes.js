import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupLogin from './landing-page/landing-page' ;

import ParentProfile from './parentProfile/parentProfile'
import Events from './events/events'

function landingPage() {
  return <h2>Landing page </h2>;
}

function signUp() {
  return <h2>SignUp</h2>;
}

function login() {
  return <h2>Login</h2>;
}

// function AppRouter() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/Landing-page">Landing-Page</Link>
//             </li>
//             <li>
//               <Link to="/signup">login</Link>
//             </li>
//             <li>
//               <Link to="/login/">Sign up</Link>
//             </li>
//           </ul>
//         </nav>
//
//         <Route path="/Landing-page/" exact component={SignupLogin} />
//
//         <Route path="/parent-profile/" component={ParentProfile} />
//         <Route path="/events/" component={Events} />
//         <Route path="/parent-info/" component={ParentInfo} />
//         <Route path="/events/" component={Events} />
//         <Route path="/get-info/" component={GetInfo} />
//         <Route path="/logout/" component={Logout} />
//         <Route path="/get-suggestions/" component={Suggestions} />
//
//       </div>
//     </Router>
//   );
// }

export default AppRouter;
