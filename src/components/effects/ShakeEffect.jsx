import React from "react";
import Shake from "../../utils/Shake";
import ReactGun from "../base/ReactGun";
import { Button } from "@chakra-ui/react";
import Panel from "../base/Panel";

class ShakeEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.state.time = new Date();
    this.stop = this.stop.bind(this);
  }
  componentDidMount() {
    super.componentDidMount();
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
      <Panel bg="orange.100" heading={this.state.gunData.title} pb="10">
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

export default ShakeEffect;
