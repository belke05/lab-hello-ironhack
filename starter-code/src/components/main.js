import React, { Component } from "react";

function Main(props) {
  return (
    <div className="main">
      <div className="left-container">
        <h1 className="title">{props.info.title}</h1>
        <h3 className="description">{props.info.description}</h3>
        <button className="awesome-btn">{props.info.btnText}</button>
      </div>
      <div className="react-logo-container">
        <img src={props.info.logoPath} />
        <img src={props.info.logoPath} />
        <img src={props.info.logoPath} />
        <img src={props.info.logoPath} />
        <img src={props.info.logoPath} />
        <img src={props.info.logoPath} />
      </div>
    </div>
  );
}

export default Main;
