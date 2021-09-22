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
  GridItem,
} from "@chakra-ui/react";
import GunInput from "../base/GunInput";
import Panel from "../base/Panel";
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
      <GridItem rowSpan={2} colSpan={1}>
        <Panel
          onClose={this.deleteMe}
          bg="blue.50"
          heading="Youtube:"
          position="relative"
          pb="10"
        >
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
              <GunSlider
                title="Starting Volume"
                gun={this.props.gun}
                gunProperty="volume"
              ></GunSlider>
            </VStack>
          </Box>
          <Button
            position="absolute"
            bottom="0"
            variant="outline"
            w="100%"
            borderRadius="0"
            onClick={this.play}
          >
            Play
          </Button>
        </Panel>
      </GridItem>
    );
  }
}

export default YoutubePanel;
