import React from "react";
import HideMiroControls from "../../utils/HideMiroControls";
import ReactGun from "../base/ReactGun";

class HideMiroControlsEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    HideMiroControls.stopEffect(this.gunBase);
  }

  render() {
    return (
      <div>
        <h3>Currently hiding Miro control: {this.state.gunData.title}</h3>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default HideMiroControlsEffect;
