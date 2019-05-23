import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./button.css";


export const StyledButton = ({name,url})=>(

   <Link to={url}>
    <button className="button" type="button">{name} </button>
    </Link>




)
