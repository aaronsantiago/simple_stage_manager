import React from "react";
import Shake from "../../utils/Shake";
import ReactGun from "../base/ReactGun";
import {
  Box,
  ButtonGroup,
  Button,
  StackDivider,
  VStack,
  GridItem,
} from "@chakra-ui/react";
import GunInput from "../base/GunInput";
import Panel from "../base/Panel";
import GunNumberInput from "../base/GunNumberInput";

class ShakePanel extends ReactGun {
  constructor(props) {
    super(props);

    this.rootGunBase = props.gunBase;

    this.activate = this.activate.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  activate() {
    Shake.activateEffect(this.rootGunBase, this.state.gunData);
  }

  deleteMe() {
    this.gunBase.put(null);
  }

  render() {
    if (!this.state.gunData) return null;
    return (
      <GridItem rowSpan={2} colSpan={1}>
        <Panel
          onClose={this.deleteMe}
          bg="orange.50"
          heading="Shake:"
          position="relative"
          pb="10"
        >
          <Box px={3} pb={2}>
            <GunInput
              mb={3}
              size="lg"
              fontSize="1em"
              placeholder="Title"
              fontWeight="bold"
              gun={this.props.gun}
              gunProperty="title"
            />
            <VStack
              spacing={1.5}
              divider={<StackDivider borderColor="gray.200" />}
              align="stretch"
            >
              <GunNumberInput
                title="duration"
                gun={this.props.gun}
                gunProperty="duration"
              />
              <GunNumberInput
                title="strength"
                gun={this.props.gun}
                gunProperty="strength"
              />
            </VStack>
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
      </GridItem>
    );
  }
}

export default ShakePanel;
