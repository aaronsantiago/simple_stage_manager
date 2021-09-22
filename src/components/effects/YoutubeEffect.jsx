import React from "react";
import Youtube from "../../utils/Youtube";
import ReactGun from "../base/ReactGun";

class YoutubeEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    Youtube.stopEffect(this.gunBase);
  }

  render() {
    if (this.state.gunData.stopped) return null;
    return (
      <div>
        <h3>Currently playing Youtube: {this.state.gunData.title}</h3>
        <button onClick={this.stop}>
          Stop
        </button>
      </div>
    );
  }
}

export default YoutubeEffect;
