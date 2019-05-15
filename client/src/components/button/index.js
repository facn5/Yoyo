import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./button.css";


export const StyledButton = ({name,url})=>(

   <Link to={url}>
    <button type="button">{name} </button>
    </Link>




)
