import React, { Component } from "react";
import SVG from "./reactlogo";

function Main(props) {
  return (
    <div className="main">
      <div className="left-container">
        <h1 className="title">{props.info.title}</h1>
        <h3 className="description">{props.info.description}</h3>
        <button className="awesome-btn">{props.info.btnText}</button>
      </div>
      <div className="react-logo-container-one">
        <SVG width="200px" height="200px" class="react-logo" id="logo-one" />
        <SVG width="150px" height="150px" class="react-logo" id="logo-two" />
        <SVG width="100px" height="100px" class="react-logo" id="logo-three" />
      </div>
      <div className="react-logo-container-two">
        <SVG width="100px" height="100px" class="react-logo" id="logo-four" />
        <SVG width="100px" height="100px" class="react-logo" id="logo-five" />
        <SVG width="100px" height="100px" class="react-logo" id="logo-six" />
      </div>
    </div>
  );
}

export default Main;
