import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";

export default class Button extends Component {
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

  playAudio() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    return (
      <AwesomeButton
        className='drum-pad'
        id={this.props.id}
        size='small'
        type='primary'
        onPress={this.playAudio}
      >
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.audiofile}
        ></audio>
        {this.props.keyTrigger}
      </AwesomeButton>
    );
  }
}
