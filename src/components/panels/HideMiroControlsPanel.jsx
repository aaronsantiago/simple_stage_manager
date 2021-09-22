import React from "react";
import HideMiroControls from "../../utils/HideMiroControls";
import ReactGun from "../base/ReactGun";

class HideMiroControlsPanel extends ReactGun {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.activate = this.activate.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  activate() {
    HideMiroControls.activateEffect(this.rootGunBase, this.state.gunData);
  }

  deleteMe() {
    this.gunBase.put(null);
  }

  render() {
    if (!this.state.gunData) return null;
    return (
      <div>
        <h3>Hide Miro Controls: {this.state.gunData.title}</h3>
        <button onClick={this.activate}>
          Activate
        </button>
        <button onClick={this.deleteMe}>
          Delete
        </button>
      </div>
    );
  }
}

export default HideMiroControlsPanel;
