import React from "react";
import ReactGun from "./base/ReactGun";
import {
  Box,
} from "@chakra-ui/react";
import IFrame from "./IFrame";

class ViewerIFrame extends ReactGun {
  render() {
    if (!this.state.gunData) return null;
    return (
      <IFrame pointerEvents="auto" src={this.state.gunData.url}/>
    );
  }
}

export default ViewerIFrame;
