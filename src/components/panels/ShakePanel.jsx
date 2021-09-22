import React from "react";
import Shake from "../../utils/Shake";
import ReactGun from "../base/ReactGun";

class ShakePanel extends ReactGun {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.activate = this.activate.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  activate() {
    Shake.activateEffect(this.rootGunBase, this.state.gunData);
  }

  deleteMe() {
    this.gunBase.put(null);
  }

  render() {
    if (!this.state.gunData) return null;
    return (
      <div>
        <h3>Shake: {this.state.gunData.title}</h3>
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

export default ShakePanel;
