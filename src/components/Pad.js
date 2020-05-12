import React, { Component } from "react";
import PadButton from "./PadButton";
import "./Pad.css";
export default class Pad extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let fullPad = this.props.currentBank.map((drumObj, i, bankArr) => {
      return (
        <PadButton
          key={bankArr[i].id}
          keyCode={bankArr[i].keyCode}
          keyTrigger={bankArr[i].keyTrigger}
          audiofile={bankArr[i].audiofile}
          id={bankArr[i].id}
          showIdDisplay={this.props.showIdDisplay}
          clearDisplay={this.props.clearDisplay}
        />
      );
    });
    return <div className='pad-bank'>{fullPad}</div>;
  }
}
