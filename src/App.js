import "./App.css";
import React, { Component } from "react";
import Pad from "./components/Pad";

const clearBank = [
  {
    keyTrigger: "A",
    id: "lore",
    audiofile: "audiofile",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Pad />
      </div>
    );
  }
}
