import React from "react";
import Youtube from "../../utils/Youtube";
import ReactGun from "../base/ReactGun";
import Panel from "../base/Panel";
import { Button, GridItem, VStack} from "@chakra-ui/react";
import GunSlider from "../base/GunSlider";
import GunCheckbox from "../base/GunCheckbox";

class YoutubeEffect extends ReactGun {
  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {
    Youtube.stopEffect(this.gunBase);
  }

  render() {
    if (this.state.gunData.stopped) return null;
    return (
      <GridItem rowSpan={2} colSpan={1}>
        <Panel bg="blue.100" heading={this.state.gunData.title} pb="10">
          <VStack w="100%" h="100%" p="1">
            <GunSlider
              title="Volume"
              gun={this.props.gun}
              gunProperty="volume"
            />
            <GunCheckbox title="Hidden" gun={this.props.gun} gunProperty="hidden"/>
          </VStack>
          <Button
            position="absolute"
            bottom="0"
            variant="outline"
            w="100%"
            borderRadius="0"
            onClick={this.stop}
          >
            Stop
          </Button>
        </Panel>
      </GridItem>
    );
  }
}

export default YoutubeEffect;
