import React from "react";
import UIPanels from "../components/UIPanels";
import ActiveEffects from "../components/ActiveEffects";
import {
  Button,
  Box,
  Flex,
  Spacer
} from "@chakra-ui/react";
import { withRouter } from "react-router";

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.roomId = this.props.match.params.room_id;
    if (this.roomId == null) {
      this.gunBase = props.gun;
    }
    else {
      this.gunBase = props.gun.get(this.roomId);
      props.gun.get(this.roomId).put({url: "https://miro.com/app/live-embed/o9J_l4wytsU=/?moveToViewport=-283115,-144320,205362,187213"})
    }
  }

  render() {
    return (
      <>
        <Box minW="100vw" minH="100vh" bg="#D0C5D0">
          <Flex minH="100vh">
            <Box width="100%" height="100%">
              <UIPanels
                gun={this.gunBase.get("ui")}
                gunBase={this.gunBase}
              ></UIPanels>
            </Box>
            <ActiveEffects gun={this.gunBase.get("activefx")}></ActiveEffects>
          </Flex>
        </Box>
      </>
    );
  }
}

export default withRouter(Manager);
