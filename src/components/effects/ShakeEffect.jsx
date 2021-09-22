import React from "react";
import Shake from "../../utils/Shake";
import ReactGun from "../base/ReactGun";
import { Box, Heading, Button } from "@chakra-ui/react";

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
      <Box p={3} shadow="md" borderWidth="1px">
        <Heading as="h4" size="xs">
          Currently shaking:
        </Heading>
        <Heading as="h5" size="sm">
          {this.state.gunData.title}
        </Heading>
        <Button onClick={this.stop}>Stop</Button>
      </Box>
    );
  }
}

export default ShakeEffect;
