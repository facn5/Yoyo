import React from "react";
import Navbar from "../navbar/index";
import {BookNow} from "./bookNow"
import './bookNowContainer.css'
import {StyledButton} from "../button/index.js"

export default class BookNowContainer extends React.Component {
  render() {
    return (<>
<h1>BookNow</h1>
<Navbar />
<BookNow name="name" description="description" teacher="teacher" location="location"
 skills="skills" price="price" dates="dates"/>
 <div className="booknowbtn">
<StyledButton url="/events/" text="hi">{this.text}</StyledButton>
</div>
    </>)
  }
}
