import React, { Component } from "react";
import Button from "./Button";

export default class Pad extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let fullPad = this.props.currentBank.map((drumObj, i, bankArr) => {
      return (
        <Button
          keyCode={bankArr[i].keyCode}
          keyTrigger={bankArr[i].keyTrigger}
          audiofile={bankArr[i].audiofile}
          id={bankArr[i].id}
        />
      );
    });
    return <div className='pad-bank'>{fullPad}</div>;
  }
}
