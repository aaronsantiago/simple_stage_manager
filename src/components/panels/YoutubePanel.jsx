import React from "react";
import Youtube from "../../utils/Youtube";
import ReactGun from "../base/ReactGun";
import {
  Text,
  Box,
  Button,
  StackDivider,
  VStack,
  GridItem,
  ButtonGroup,
} from "@chakra-ui/react";
import GunInput from "../base/GunInput";
import Panel from "../base/Panel";
import GunCheckbox from "../base/GunCheckbox";
import GunSlider from "../base/GunSlider";

class YoutubePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
    this.play = this.play.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  componentDidMount() {
    this.setState({active: window.currentActiveEffects[this.props.data.key]});
  }

  play() {
    Youtube.activateEffect(this.props.gunBase, this.props.data);
  }

  deleteMe() {
    this.props.gun.put(null);
  }

  render() {
    window.currentActivePanels[this.props.data.key] = null;
    if (!this.props.data) return null;
    window.currentActivePanels[this.props.data.key] = this;
    return (
      <GridItem rowSpan={2} colSpan={1}>
        <Panel
          onClose={this.deleteMe}
          bg="blue.50"
          heading="Youtube:"
          position="relative"
          pb="10"
          onMoveUp={this.props.onMoveUp}
          onMoveDown={this.props.onMoveDown}
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
              sync={false}
              value={this.props.data.title}
            />
            <VStack spacing={3.5} align="stretch">
              <Box>
                <Text size="xs">Youtube URL</Text>
                <GunInput
                  title="url"
                  size="xs"
                  gun={this.props.gun}
                  gunProperty="url"
                  sync={false}
                  value={this.props.data.url}
                />
              </Box>
              <GunCheckbox
                title="Hidden During Play"
                gun={this.props.gun}
                gunProperty="hidden"
                sync={false}
                value={this.props.data.hidden}
              />
              <GunSlider
                title="Starting Volume"
                gun={this.props.gun}
                gunProperty="volume"
                sync={false}
                value={this.props.data.volume}
              ></GunSlider>
            </VStack>
          </Box>
          <ButtonGroup
            position="absolute"
            bottom="0"
            variant="outline"
            w="100%"
            isAttached="true"
          >
            <Button borderRadius="0" onClick={this.play} width="100%">
              Activate
            </Button>
            {this.state.active ? (
              <Button
                borderRadius="0"
                borderLeft="1px"
                onClick={() => {
                  Youtube.stopEffect(
                    this.props.gunBase
                      .get("activefx")
                      .get("activefx" + this.props.data.key)
                  );
                }}
                width="100%"
              >
                Deactivate
              </Button>
            ) : null}
          </ButtonGroup>
        </Panel>
      </GridItem>
    );
  }
}

export default YoutubePanel;
