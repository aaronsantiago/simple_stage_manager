import React from "react";
import Fade from "../../utils/Fade";
import ReactGun from "../base/ReactGun";

class FadeEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    Fade.stopEffect(this.gunBase);
  }

  render() {
    return (
      <div>
        <h3>Currently faded out: {this.state.gunData.title}</h3>
        <button onClick={this.stop}>
          Fade in
        </button>
      </div>
    );
  }
}

export default FadeEffect;
