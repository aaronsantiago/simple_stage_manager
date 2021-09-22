import React from "react";
import UIPanels from "../components/UIPanels";
import ActiveEffects from "../components/ActiveEffects";
import Youtube from "../utils/Youtube";
import URLOverlay from "../utils/URLOverlay";
import Fade from "../utils/Fade";
import Shake from "../utils/Shake";
import HideMiroControls from "../utils/HideMiroControls";
import {
  Button,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  MenuItem,
  ChevronDownIcon,
} from "@chakra-ui/react";
import { withRouter } from "react-router";

class Controller extends React.Component {
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
        <Box>
          <Menu>
            <Button variant="outline" p="0">
              <MenuButton
                w="100%"
                h="100%"
                p="4"
                rightIcon={<ChevronDownIcon />}
              >
                Create new panel
              </MenuButton>
            </Button>
            <MenuList>
              <MenuItem
                onClick={() => {
                  Youtube.createPanel(this.gunBase);
                }}
              >
                Youtube
              </MenuItem>
              <MenuItem onClick={() => {
                URLOverlay.createPanel(this.gunBase);
              }}>URL Overlay</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => {
                Fade.createPanel(this.gunBase);
              }}>Fade</MenuItem>
              <MenuItem onClick={() => {
                Shake.createPanel(this.gunBase);
              }}>Shake</MenuItem>
              <MenuItem onClick={() => {
                HideMiroControls.createPanel(this.gunBase);
              }}>Hide Miro Controls</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <UIPanels
          gun={this.gunBase.get("ui")}
          gunBase={this.gunBase}
        ></UIPanels>
        <ActiveEffects gun={this.gunBase.get("activefx")}></ActiveEffects>
      </>
    );
  }
}

export default withRouter(Controller);
