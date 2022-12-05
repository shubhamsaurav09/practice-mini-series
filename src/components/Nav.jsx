import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <Link className="links" to={props.path}>
      {props.name}
    </Link>
  );
}

export default Nav;
