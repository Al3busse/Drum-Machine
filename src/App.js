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
    id: "ht04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1AUvQ9T8Dx3FqUErpqoc6YGrRFC7rJSas",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "ht05",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1SzBEPRFram_KSOoExkhceQ2PXfKOdH68",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "ht06",
    audiofile:
      "https://docs.google.com/uc?export=download&id=14VDhXSHUA-wg52fx3qr8AnnjBRkK5df-",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "cy01",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1dM2JiKjXHgw2c1YbB1u3-jOHlL51LdSf",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "sd08",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1u6XVbtXqA5oWAbsv_l2-zYhg6Phmqtg3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "sd10",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1kb_HNnYYwoopWBS6MowS3hvaLNC3Bunl",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "ch06",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1qLquzylBWirShs2i-lEb0OnpdfDtosXT",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "lt06",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1A_W89kkPPiaDVjfw69aDQaSSHw8P3nAq",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "bd02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1JsMCGAO7HnoLNp9-PQS__HqiRPdlKNMl",
  },
];

const distortedBank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "ht02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1K8-0MKtRi_rDNHQsWNZwq5UAvZ-7Rpgd",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "ht03",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1kX1aP5Svb7T1ssMZ14EOzXCeDkiAYQU0",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "ch02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1Es1BUVp2gimKCC5J-InQhIrr01SoSXV2",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "sn02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=18rNJrcO_z357zot4RsBP6p1g7EBBxhOD",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "sn04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=17Yo-bGYNtjeBEy8dNDxdjlr0EZEoJa9s",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "cy04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=18v53d180FsGdhszs5IO3DJnqNPy6FmQ2",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "lt02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1zfTg2cB-06Bh77JCUekTL_fwhQCGN5O2",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "lt04",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1eHv6XkuB5vm9IF6fL-o-A8K10jZrw7Jy",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "bd02",
    audiofile:
      "https://docs.google.com/uc?export=download&id=1ValhF_q6Qy1OmkISUSbnFhulSn49aFBC",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBank: clearBank,
      bankIcon: ToggleOnTwoToneIcon,
    };
    this.changeBank = this.changeBank.bind(this);
  }

  changeBank() {
    if (this.state.currentBank === clearBank) {
      this.setState({
        currentBank: distortedBank,
        bankIcon: ToggleOffTwoToneIcon,
      });
    } else {
      this.setState({ currentBank: clearBank, bankIcon: ToggleOnTwoToneIcon });
    }
  }

  render() {
    return (
      <div id='drum-machine'>
        <Pad currentBank={this.state.currentBank} />
        <IconButton color='primary' onClick={this.changeBank}>
          <this.state.bankIcon />
        </IconButton>
      </div>
    );
  }
}
