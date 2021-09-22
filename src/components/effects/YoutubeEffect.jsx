import React from "react";
import { map } from "lodash";
import Youtube from "../../utils/Youtube";

class YoutubeEffect extends React.Component {
  constructor(props) {
    super(props);
    this.myGunBase = props.gun;
    this.state = { gunData: {} };
    this.gunListeners = {};

    this.stop = this.stop.bind(this);
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

  stop() {
    Youtube.stopEffect(this.myGunBase);
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
