import React from "react";
import HideMiroControls from "../../utils/HideMiroControls";
import ReactGun from "../base/ReactGun";
import Panel from "../base/Panel";
import { Button } from "@chakra-ui/button";

class HideMiroControlsEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    HideMiroControls.stopEffect(this.gunBase);
  }

  render() {
    return (
      <Panel bg="green.100" heading={this.state.gunData.title} pb="10">
        <Button
          position="absolute"
          bottom="0"
          variant="outline"
          w="100%"
          borderRadius="0"
          onClick={this.stop}
        >
          Deactivate
        </Button>
      </Panel>
    );
  }
}

export default HideMiroControlsEffect;
