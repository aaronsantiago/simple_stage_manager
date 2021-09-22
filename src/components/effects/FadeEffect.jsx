import React from "react";
import Fade from "../../utils/Fade";
import ReactGun from "../base/ReactGun";
import Panel from "../base/Panel";
import { Button } from "@chakra-ui/button";

class FadeEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    Fade.stopEffect(this.gunBase);
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

export default FadeEffect;
