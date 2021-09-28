import React from "react";
import UIPanels from "../components/UIPanels";
import ActiveEffects from "../components/ActiveEffects";
import {
  Text,
  Box,
  Flex,
  VStack
} from "@chakra-ui/react";
import { withRouter } from "react-router";
import Panel from "../components/base/Panel";
import ViewerInfo from "../components/ViewerInfo";

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.roomId = this.props.match.params.room_id;
    if (this.roomId == null) {
      this.gunBase = props.gun;
    }
    else {
      this.gunBase = props.gun.get(this.roomId);
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
            <VStack h="100vh" spacing={0}>
              <ActiveEffects gun={this.gunBase.get("activefx")}></ActiveEffects>
            </VStack>
          </Flex>
        </Box>
      </>
    );
  }
}

export default withRouter(Manager);
