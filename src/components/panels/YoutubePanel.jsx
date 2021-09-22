import React from "react";
import { map } from "lodash";
import Youtube from "../../utils/Youtube";

class YoutubePanel extends React.Component {
  constructor(props) {
    super(props);
    this.myGunBase = props.gun;
    this.gunBase = props.gunBase;
    this.state = { gunData: {} };
    this.gunListeners = {};

    this.play = this.play.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  componentDidMount() {
    this.myGunBase.on((property, key, _, ev) => {
      this.gunListeners["gunData"] = ev;
      this.setState({
        gunData: property,
      });
    });
  }

  componentWillUnmount() {
    map(this.gunListeners, (listener) => {
      listener.off();
    });
  }

  play() {
    Youtube.activateEffect(this.gunBase, this.state.gunData);
  }

  deleteMe() {
    this.myGunBase.put(null);
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
