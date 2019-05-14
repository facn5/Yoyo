import React from "react";
import StyledButton from '../button/index'
import "./index.css";

export default class navbar extends React.Component {
   render() {
return (

  <div className="navbar">

<StyledButton name="profile"/>
<StyledButton name="events"/>
<StyledButton name="info"/>


   </div>
 );


   }

}
