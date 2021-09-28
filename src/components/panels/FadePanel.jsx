import React from "react";
import Fade from "../../utils/Fade";
import ReactGun from "../base/ReactGun";
import {
  Box,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Panel from "../base/Panel";
import GunInput from "../base/GunInput";

class FadePanel extends React.Component {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.activate = this.activate.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  activate() {
    Fade.activateEffect(this.rootGunBase, this.props.data);
  }

  deleteMe() {
    this.props.gun.put(null);
  }

  render() {
    if (!this.props.data) return null;
    return (
      <Panel
        onClose={this.deleteMe}
        bg="green.50"
        heading="Fade Out:"
        position="relative"
      >
        <Box px={3} pb={10}>
          <GunInput
            mb={3}
            size="lg"
            fontSize="1em"
            placeholder="Title"
            fontWeight="bold"
            gun={this.props.gun}
            gunProperty="title"
            sync={false}
            value={this.props.data.title}
          />
        </Box>
        <Button
          position="absolute"
          bottom="0"
          variant="outline"
          w="100%"
          borderRadius="0"
          onClick={this.activate}
        >
          Activate
        </Button>
      </Panel>
    );
  }
}

export default FadePanel;
