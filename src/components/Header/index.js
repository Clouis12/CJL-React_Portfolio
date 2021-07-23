
import React from "react";
import { Navigation } from "../Navigation";
import "./index.css"; 

export function Header(props ) {
    return (
      <React.Fragment>
        <h1 className="cjl-Header">First Header {props.dateSpecial}</h1>
        <Navigation />
      </React.Fragment>
    ); 
}