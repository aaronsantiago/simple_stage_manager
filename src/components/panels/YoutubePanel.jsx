import React from "react";
import Youtube from "../../utils/Youtube";
import ReactGun from "../base/ReactGun";
import {
  Text,
  Box,
  ButtonGroup,
  Button,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import GunInput from "../base/GunInput";
import Panel from "../base/Panel";
import GunNumberInput from "../base/GunNumberInput";
import GunCheckbox from "../base/GunCheckbox";
import GunSlider from "../base/GunSlider";

class YoutubePanel extends ReactGun {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.play = this.play.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  play() {
    Youtube.activateEffect(this.rootGunBase, this.state.gunData);
  }

  deleteMe() {
    this.gunBase.put(null);
  }

  render() {
    if (!this.state.gunData) return null;
    return (
      <Panel bg="blue.50" heading="Youtube:" position="relative" pb="10">
        <Box px={3} pb={2}>
          <GunInput
            mb={3}
            size="lg"
            fontSize="1em"
            overflow="wrap"
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
            <Box>
              <Text size="xs">Youtube URL</Text>
              <GunInput
                title="url"
                size="xs"
                gun={this.props.gun}
                gunProperty="url"
              />
            </Box>
            <GunCheckbox
              title="Hidden During Play"
              gun={this.props.gun}
              gunProperty="hidden"
            />
            <GunSlider title="Starting Volume" gun={this.props.gun} gunProperty="volume"></GunSlider>
          </VStack>
        </Box>
        <ButtonGroup
          position="absolute"
          bottom="0"
          borderRadius="0"
          isAttached
          variant="outline"
          w="100%"
        >
          <Button w="100%" borderRadius="0" onClick={this.play}>
            Play
          </Button>
          <Button w="100%" borderRadius="0" onClick={this.deleteMe}>
            Delete
          </Button>
        </ButtonGroup>
      </Panel>
    );
  }
}

export default YoutubePanel;
