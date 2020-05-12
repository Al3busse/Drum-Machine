import React, { Component } from "react";
import "./PadButton.css";

export default class PadButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playAudio();
    }
  }

  playAudio(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.props.showIdDisplay(this.props.id);
    this.props.clearDisplay();
  }

  render() {
    return (
      <button className='drum-pad' id={this.props.id} onClick={this.playAudio}>
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.audiofile}
        ></audio>
        {this.props.keyTrigger}
      </button>
    );
  }
}
