import React from "react";
import URLOverlay from "../../utils/URLOverlay";
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

class URLOverlayPanel extends React.Component {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.activate = this.activate.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  activate() {
    URLOverlay.activateEffect(this.rootGunBase, this.props.data);
  }

  deleteMe() {
    this.props.gun.put(null);
  }

  render() {
    if (!this.props.data) return null;
    return (
      <GridItem rowSpan={2} colSpan={1}>
        <Panel
          onClose={this.deleteMe}
          bg="red.50"
          heading="URL Overlay:"
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
              sync={false}
              value={this.props.data.title}
              onMoveUp={this.props.onMoveUp}
              onMoveDown={this.props.onMoveDown}
            />
            <VStack spacing={3.5} align="stretch">
              <Box>
                <Text size="xs">Overlay URL</Text>
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
                title="Users can click through"
                gun={this.props.gun}
                gunProperty="clickthrough"
                sync={false}
                value={this.props.data.clickthrough}
              />
              <GunCheckbox
                title="Hidden while activated"
                gun={this.props.gun}
                gunProperty="hidden"
                sync={false}
                value={this.props.data.hidden}
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

export default URLOverlayPanel;
