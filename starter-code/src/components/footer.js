import React, { Component } from "react";
function ListItem(props) {
  return (
    <li className="list-item">
      <img src={props.info.source} className="small-image" />
      <h4 className="small-title">{props.info.title}</h4>
      <p className="small-description">{props.info.description}</p>
    </li>
  );
}

function Footer(props) {
  return (
    <ul className="description-list">
      <ListItem info={props.info[0]} />
      <ListItem info={props.info[1]} />
      <ListItem info={props.info[2]} />
      <ListItem info={props.info[3]} />
    </ul>
  );
}

export default Footer;
