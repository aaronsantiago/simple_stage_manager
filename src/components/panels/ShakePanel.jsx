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

class ShakePanel extends React.Component {
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
    Shake.activateEffect(this.props.gunBase, this.props.data);
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
          bg="orange.50"
          heading="Shake:"
          position="relative"
          pb="10"
          moveCard={this.props.moveCard}
          commitChange={this.props.commitChange}
          index={this.props.index}
          id={this.props.id}
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
              sync={false}
              value={this.props.data.title}
            />
            <VStack
              spacing={5}
              align="stretch"
            >
              <GunNumberInput
                title="duration"
                gun={this.props.gun}
                gunProperty="duration"
                sync={false}
                value={this.props.data.duration}
              />
              <GunNumberInput
                title="strength"
                gun={this.props.gun}
                gunProperty="strength"
                sync={false}
                value={this.props.data.strength}
              />
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
            {this.state.active ? (
              <Button
                borderRadius="0"
                borderLeft="1px"
                onClick={() => {
                  Shake.stopEffect(
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

export default ShakePanel;
