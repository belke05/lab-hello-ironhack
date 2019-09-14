import React, { Component } from "react";

function Nav(props) {
  return (
    <nav className="navbar">
      <img className="ironhackLogo" src={props.info.ironLogo} />
      <img className="reactLogo" src={props.info.menuLogo} />
    </nav>
  );
}

export default Nav;
