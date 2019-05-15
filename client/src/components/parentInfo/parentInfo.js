import React from 'react' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderC from './header/index';
import Navbar from './navbar/index';

export const ParentInfo = ()=>(
      <div>
      <HeaderC/>
     <Navbar/>
      <h1>Hello from parent Information</h1>
      </div>
    );
