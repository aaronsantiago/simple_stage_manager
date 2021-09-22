import React from "react";
import Shake from "../../utils/Shake";
import ReactGun from "../base/ReactGun";

class ShakeEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.state.time = new Date();
    this.stop = this.stop.bind(this);
  }
  componentDidMount() {
    super.componentDidMount();
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 16); // every frame (ish)
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    clearInterval(this.update);
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
      return null;
    }
    return (
      <div>
        <h3>Currently shaking: {this.state.gunData.title}</h3>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default ShakeEffect;
