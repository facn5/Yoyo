import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderC from "../header/index";
import Navbar from "../navbar/index";

const ParentInfo = () => (
  <div>
    <HeaderC />
    <Navbar />
    <h1>Hello from parent Information</h1>
  </div>
);

export default ParentInfo ;
