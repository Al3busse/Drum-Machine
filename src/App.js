import "./App.css";
import React, { Component } from "react";
import Pad from "./components/Pad";

const clearBank = [
  {
    keyTrigger: "Q",
    id: "ht04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1AUvQ9T8Dx3FqUErpqoc6YGrRFC7rJSas",
  },
  {
    keyTrigger: "W",
    id: "ht05",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1SzBEPRFram_KSOoExkhceQ2PXfKOdH68",
  },
  {
    keyTrigger: "E",
    id: "ht06",
    audiofile:
      "https://docs.google.com/uc?export=download&id=14VDhXSHUA-wg52fx3qr8AnnjBRkK5df-",
  },
  {
    keyTrigger: "A",
    id: "cy01",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1dM2JiKjXHgw2c1YbB1u3-jOHlL51LdSf",
  },
  {
    keyTrigger: "S",
    id: "sd08",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1u6XVbtXqA5oWAbsv_l2-zYhg6Phmqtg3",
  },
  {
    keyTrigger: "D",
    id: "sd10",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1kb_HNnYYwoopWBS6MowS3hvaLNC3Bunl",
  },
  {
    keyTrigger: "Z",
    id: "ch06",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1qLquzylBWirShs2i-lEb0OnpdfDtosXT",
  },
  {
    keyTrigger: "X",
    id: "lt06",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1A_W89kkPPiaDVjfw69aDQaSSHw8P3nAq",
  },
  {
    keyTrigger: "C",
    id: "bd02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1JsMCGAO7HnoLNp9-PQS__HqiRPdlKNMl",
  },
];

const distortedBank = [
  {
    keyTrigger: "Q",
    id: "ht02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1K8-0MKtRi_rDNHQsWNZwq5UAvZ-7Rpgd",
  },
  {
    keyTrigger: "W",
    id: "ht03",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1kX1aP5Svb7T1ssMZ14EOzXCeDkiAYQU0",
  },
  {
    keyTrigger: "E",
    id: "ch02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1Es1BUVp2gimKCC5J-InQhIrr01SoSXV2",
  },
  {
    keyTrigger: "A",
    id: "sn02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=18rNJrcO_z357zot4RsBP6p1g7EBBxhOD",
  },
  {
    keyTrigger: "S",
    id: "sn04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=17Yo-bGYNtjeBEy8dNDxdjlr0EZEoJa9s",
  },
  {
    keyTrigger: "D",
    id: "cy04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=18v53d180FsGdhszs5IO3DJnqNPy6FmQ2",
  },
  {
    keyTrigger: "Z",
    id: "lt02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1zfTg2cB-06Bh77JCUekTL_fwhQCGN5O2",
  },
  {
    keyTrigger: "X",
    id: "lt04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1eHv6XkuB5vm9IF6fL-o-A8K10jZrw7Jy",
  },
  {
    keyTrigger: "C",
    id: "bd02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1ValhF_q6Qy1OmkISUSbnFhulSn49aFBC",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.playAudio = this.playAudio.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
  }

  updateAudio() {
    const random = Math.floor(Math.random() * 9) + 0;

    this.audio = new Audio(clearBank[random].audiofile);

    this.audio.play();
  }

  playAudio() {
    this.audioo.currentTime = 0;
    this.audioo.play();
  }

  render() {
    return (
      <div>
        <button onClick={this.updateAudio}>play</button>
        <Pad />
      </div>
    );
  }
}
