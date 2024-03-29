import React from "react";
import Fade from "../../utils/Fade";
import ReactGun from "../base/ReactGun";
import {
  Box,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Panel from "../base/Panel";
import GunInput from "../base/GunInput";

class FadePanel extends React.Component {
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
    Fade.activateEffect(this.props.gunBase, this.props.data);
  }

  deleteMe() {
    this.props.gun.put(null);
  }

  render() {
    window.currentActivePanels[this.props.data.key] = null;
    if (!this.props.data) return null;
    window.currentActivePanels[this.props.data.key] = this;
    return (
      <Panel
        onClose={this.deleteMe}
        bg="green.50"
        heading="Fade Out:"
        position="relative"
        moveCard={this.props.moveCard}
        commitChange={this.props.commitChange}
        index={this.props.index}
        id={this.props.id}
      >
        <Box px={3} pb={10}>
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
                  Fade.stopEffect(
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
    );
  }
}

export default FadePanel;
