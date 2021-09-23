import React from "react";
import { map, sortBy } from "lodash";
import ReactGunMap from "../base/ReactGunMap";
import { Box } from "@chakra-ui/layout";

class ViewerShakeEffect extends ReactGunMap {
  constructor(props) {
    super(props);
    this.state.shake = 0;
    this.interval = null;
  }

  calculateShake() {
    if (!this.state) return;
    let shakeAmount = 0;
    map(this.state.gunData, (el) => {
      if (
        el === null ||
        el.deleted === true ||
        el.type != "shake" ||
        el.duration == null ||
        el.strength == null ||
        el.timestamp == null
      )
        return;
      let d = el.duration;
      // add .3 seconds to compensate for lag
      let t = Math.min(d,Math.max(0,(Date.now() - el.timestamp  + 300)/1000));
      let s = (d - t)/d * el.strength;
      shakeAmount += s;
    });

    this.setState({
      shake: shakeAmount,
      gunData: this.state.gunData
    });
  }

  componentDidMount() {
    super.componentDidMount();
    setInterval(() => this.calculateShake(), 30);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    let angle = Math.random() * Math.PI * 2;
    return (
      <Box width="100%" height="100%" overflow="hidden">
        <Box
          width="100%"
          height="100%"
          transform="auto"
          rotate={((angle - Math.PI) * Math.min(10, this.state.shake)) / 10}
          translateX={Math.cos(angle) * this.state.shake + "px"}
          translateY={Math.sin(angle) * this.state.shake + "px"}
        >
          {this.props.children}
        </Box>
      </Box>
    );
  }
}

export default ViewerShakeEffect;
