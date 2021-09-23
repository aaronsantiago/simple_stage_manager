import React from "react";
import { map, sortBy } from "lodash";
import ReactGunMap from "../base/ReactGunMap";
import { Box } from "@chakra-ui/layout";

class ViewerHideMiroControlsEffect extends ReactGunMap {
  constructor(props) {
    super(props);
    this.state.shake = 0;
    this.interval = null;
  }

  calculateShake() {
    if (!this.state) return;
    let shakeAmount = 0;

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
    let controlsHidden = false;
    map(this.state.gunData, (el) => {
      if (
        el === null ||
        el.deleted === true ||
        el.type != "miro-hide"
      )
        return;
      controlsHidden = true;
    });
    return (
      <Box width="100%" height="100%" overflow="hidden">
        <Box
          {...(controlsHidden
            ? {
                position: "absolute",
                width: "210vw",
                height: "130vh",
                top: "-30vh",
                left: "-50vw",
              }
            : {})}
        >
          {this.props.children}
        </Box>
      </Box>
    );
  }
}

export default ViewerHideMiroControlsEffect;
