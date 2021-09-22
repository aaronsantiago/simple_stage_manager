import React from "react";
import Youtube from "../../utils/Youtube";
import ReactGun from "../base/ReactGun";

class YoutubePanel extends ReactGun {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.play = this.play.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  play() {
    Youtube.activateEffect(this.rootGunBase, this.state.gunData);
  }

  deleteMe() {
    this.gunBase.put(null);
  }

  render() {
    if (!this.state.gunData) return null;
    return (
      <div>
        <h3>Youtube: {this.state.gunData.title}</h3>
        <button onClick={this.play}>
          Play
        </button>
        <button onClick={this.deleteMe}>
          Delete
        </button>
      </div>
    );
  }
}

export default YoutubePanel;
