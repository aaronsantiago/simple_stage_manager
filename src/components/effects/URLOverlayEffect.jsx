import React from "react";
import URLOverlay from "../../utils/URLOverlay";
import Panel from "../base/Panel";
import ReactGun from "../base/ReactGun";
import { Button } from "@chakra-ui/button";

class URLOverlayEffect extends React.Component {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    URLOverlay.stopEffect(this.props.gun);
  }

  render() {
    return (
      <Panel bg="red.100" heading={this.props.data.title} pb="10">
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

export default URLOverlayEffect;
