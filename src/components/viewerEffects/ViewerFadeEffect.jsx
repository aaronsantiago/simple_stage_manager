import React from "react";
import { map, sortBy } from "lodash";
import ReactGunMap from "../base/ReactGunMap";
import { Box } from "@chakra-ui/layout";

class ViewerFadeEffect extends ReactGunMap {
  constructor(props) {
    super(props);
    this.state.fadeActive = false;
    this.state.opacity = 0;
    this.interval = null;
  }

  calculateOpacity() {
    if (!this.state) return;
    let fadeActive = false;
    map(this.state.gunData, (el) => {
      if (el === null || el.deleted === true || el.type != "fade") return;
      fadeActive = true;
    });
    let newOpacity = ((fadeActive ? 1 : 0) + this.state.opacity * 4) / 5;
    this.setState({
      fadeActive: fadeActive,
      opacity: newOpacity,
      gunData: this.state.gunData
    });
  }

  componentDidMount() {
    super.componentDidMount();
    setInterval(() => this.calculateOpacity(), 30);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <Box
        w="100vw"
        h="100vh"
        opacity={this.state.opacity}
        style={{ background: "#000" }}
        position="absolute"
        left="0"
        top="0"
        zIndex="100"
        pointerEvents={this.state.fadeActive ? "auto" : "none"}
        onClick={(e) => (this.state.fadeActive ? e.preventDefault() : null)}
      />
    );
  }
}

export default ViewerFadeEffect;
