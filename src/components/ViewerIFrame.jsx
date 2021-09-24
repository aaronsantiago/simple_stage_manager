import React from "react";
import ReactGun from "./base/ReactGun";
import {
  Box,
} from "@chakra-ui/react";

class ViewerIFrame extends ReactGun {
  render() {
    if (!this.state.gunData) return null;
    return (
      <iframe 
      style={{
        width:"100%",
        height:"100%",
        pointerEvents:"auto",
        zindex:"0",
      }}
      src={this.state.gunData.url}/>
    );
  }
}

export default ViewerIFrame;
