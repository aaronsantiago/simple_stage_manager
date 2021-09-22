import React from "react";
import URLOverlay from "../../utils/URLOverlay";
import ReactGun from "../base/ReactGun";

class URLOverlayEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    URLOverlay.stopEffect(this.gunBase);
  }

  render() {
    return (
      <div>
        <h3>Currently active overlay: {this.state.gunData.title}</h3>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default URLOverlayEffect;
