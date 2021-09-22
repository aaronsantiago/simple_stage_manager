import React from "react";
import Shake from "../../utils/Shake";
import ReactGun from "../base/ReactGun";

class ShakeEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    Shake.stopEffect(this.gunBase);
  }

  render() {
    // show shake for an extra 100ms
    if (
      Date.now() - 100 >
      this.state.gunData.startTime + this.state.gunData.duration * 1000
    ) {
      console.log(Date.now() - this.state.gunData.startTime);
      return null;
    }
    console.log(Date.now() - this.state.gunData.startTime);
    return (
      <div>
        <h3>Currently shaking: {this.state.gunData.title}</h3>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default ShakeEffect;
