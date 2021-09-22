import React from "react";
import HideMiroControls from "../../utils/HideMiroControls";
import ReactGun from "../base/ReactGun";
import {
  Box,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Panel from "../base/Panel";
import GunInput from "../base/GunInput";

class HideMiroControlsPanel extends ReactGun {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.activate = this.activate.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  activate() {
    HideMiroControls.activateEffect(this.rootGunBase, this.state.gunData);
  }

  deleteMe() {
    this.gunBase.put(null);
  }

  render() {
    if (!this.state.gunData) return null;
    return (
      <Panel onClose={this.deleteMe} bg="green.50" heading="Hide Miro Controls:" position="relative">
        <Box px={3} pb={10}>
          <GunInput
            mb={3}
            size="lg"
            fontSize="1em"
            placeholder="Title"
            fontWeight="bold"
            gun={this.props.gun}
            gunProperty="title"
          />
        </Box>
        <ButtonGroup position="absolute" bottom="0" borderRadius="0" isAttached variant="outline" w="100%">
          <Button w="100%" borderRadius="0" onClick={this.activate}>
            Activate
          </Button>
        </ButtonGroup>
      </Panel>
    );
  }
}

export default HideMiroControlsPanel;
