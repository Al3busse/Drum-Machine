import React, { Component } from "react";
import "./PadButton.css";

const inactiveStyle = {
  background: "linear-gradient(to bottom, #5e278f 5%, #7654af 100%)",
  boxShadow: "2px 2px 1px 0px #ea5573",
};

const activeStyle = {
  background: "linear-gradient(to bottom, #5e278f 5%, #ea5573 95%)",
  position: "relative",
  top: "2px",
  left: "1px",
  boxShadow: "1px 1px 0px 0px #5e278f",
};

export default class PadButton extends Component {
  constructor(props) {
    super(props);

    this.state = { style: inactiveStyle };

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.padActivation = this.padActivation.bind(this);
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

  padActivation() {
    this.setState({ style: activeStyle });
    setTimeout(() => this.setState({ style: inactiveStyle }), 200);
  }

  playAudio(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.props.showIdDisplay(this.props.id);
    this.props.clearDisplay();
    this.padActivation();
  }

  render() {
    return (
      <button
        className='drum-pad'
        style={this.state.style}
        id={this.props.id}
        onClick={this.playAudio}
      >
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
