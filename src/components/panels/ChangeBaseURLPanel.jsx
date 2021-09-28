import React from "react";
import ChangeBaseURL from "../../utils/ChangeBaseURL";
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

class ChangeBaseURLPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
    this.activate = this.activate.bind(this);
    this.deleteMe = this.deleteMe.bind(this);
  }

  componentDidMount() {
    this.setState({active: window.currentActiveEffects[this.props.data.key]});
  }

  activate() {
    ChangeBaseURL.activateEffect(this.props.gunBase, this.props.data);
  }

  deleteMe() {
    this.props.gun.put(null);
  }

  render() {
    window.currentActivePanels[this.props.data.key] = null;
    if (!this.props.data) return null;
    window.currentActivePanels[this.props.data.key] = this;
    return (
      <GridItem rowSpan={1} colSpan={1}>
        <Panel
          onClose={this.deleteMe}
          bg="purple.50"
          heading="Change Base URL:"
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
            </VStack>
          </Box>
          <ButtonGroup
            position="absolute"
            bottom="0"
            variant="outline"
            w="100%"
            isAttached="true"
          >
            <Button borderRadius="0" onClick={this.activate} width="100%">
              Activate
            </Button>
          </ButtonGroup>
        </Panel>
      </GridItem>
    );
  }
}

export default ChangeBaseURLPanel;
