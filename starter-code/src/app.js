import React, { Component } from "react";
import "./app.css";
import Footer from "./components/footer";
import Main from "./components/main";
import Nav from "./components/nav";

const footerInfo = [
  {
    source: "./images/icon1.png",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs."
  },
  {
    source: "./images/icon2.png",
    title: "Components",
    description: "Build encapsulated components that manage their state."
  },
  {
    source: "./images/icon3.png",
    title: "Single-Way",
    description: "a set of immutable values are passed to the component's"
  },
  {
    source: "./images/icon4.png",
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers"
  }
];
const mainInfos = {
  title: "Say hello to ReactJS",
  description:
    "You will learn a FrontEnd framework from scratch, to become a ninja developer",
  btnText: "Awesome!",
  logoPath: "images/react-logo.svg"
};
const navInfos = {
  ironLogo: "images/ironhack-logo.svg",
  menuLogo: "images/menu-top.svg"
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav info={navInfos} />
        <Main info={mainInfos} />
        <Footer info={footerInfo} />
      </div>
    );
  }
}

export default App;
