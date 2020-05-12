import "./App.css";
import React, { Component } from "react";
import Pad from "./components/Pad";
import IconButton from "@material-ui/core/IconButton";
import ToggleOffTwoToneIcon from "@material-ui/icons/ToggleOffTwoTone";
import ToggleOnTwoToneIcon from "@material-ui/icons/ToggleOnTwoTone";

const clearBank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const distortedBank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    audiofile:
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    audiofile: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBank: clearBank,
      bankIcon: ToggleOnTwoToneIcon,
      display: String.fromCharCode(160),
    };
    this.changeBank = this.changeBank.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.displayAudioId = this.displayAudioId.bind(this);
  }

  changeBank() {
    if (this.state.currentBank === clearBank) {
      this.setState({
        currentBank: distortedBank,
        bankIcon: ToggleOffTwoToneIcon,
        display: "Heater Kit",
      });
      this.clearDisplay();
    } else {
      this.setState({
        currentBank: clearBank,
        bankIcon: ToggleOnTwoToneIcon,
        display: "Smooth Piano Kit",
      });
      this.clearDisplay();
    }
  }

  clearDisplay() {
    setTimeout(
      () =>
        this.setState({
          display: String.fromCharCode(160),
        }),
      1500
    );
  }

  displayAudioId(id) {
    this.setState({
      display: id,
    });
  }

  render() {
    return (
      <div id='drum-machine'>
        <p id='display'>{this.state.display}</p>
        <Pad
          currentBank={this.state.currentBank}
          showIdDisplay={this.displayAudioId}
          clearDisplay={this.clearDisplay}
        />
        <div id='switches'>
          <IconButton color='primary' onClick={this.changeBank}>
            <this.state.bankIcon />
            <span>Bank</span>
          </IconButton>
        </div>
      </div>
    );
  }
}
