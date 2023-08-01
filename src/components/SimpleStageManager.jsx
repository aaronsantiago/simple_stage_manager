import React from "react";
import Youtube from "../utils/Youtube";
import URLOverlay from "../utils/URLOverlay";
import Fade from "../utils/Fade";
import Shake from "../utils/Shake";
import HideMiroControls from "../utils/HideMiroControls";
import Panel from "./base/Panel";
import {
  Box,
  Center,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Spacer from "../utils/Spacer";
import Notes from "../utils/Notes";
import ChangeBaseURL from "../utils/ChangeBaseURL";

function SimpleStageManager({gun, sortedData}) {
  return <Panel
    p={4}
    color="#FFFC"
    borderColor="white"
    heading="simple stage manager"
    bg="#9F7AAFAA"
  >
    <Box p={3}>
      <Center>
        <Menu>
          <Button variant="unstyled" border="1px" p="0">
            <MenuButton w="100%" h="100%" p="4">
              Create new panel
            </MenuButton>
          </Button>
          <MenuList color="black">
            <MenuItem onClick={() => Youtube.createPanel(gun, sortedData)}>
              Youtube
            </MenuItem>
            <MenuItem onClick={() => URLOverlay.createPanel(gun, sortedData)}>
              URL Overlay
            </MenuItem>
            <MenuItem onClick={() => ChangeBaseURL.createPanel(gun, sortedData)}>
              Change Base URL
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => Fade.createPanel(gun, sortedData)}>
              Fade
            </MenuItem>
            <MenuItem onClick={() => Shake.createPanel(gun, sortedData)}>
              Shake
            </MenuItem>
            <MenuItem
              onClick={() => HideMiroControls.createPanel(gun, sortedData)}
            >
              Hide Miro Controls
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onClick={() => Spacer.createPanel(gun, sortedData)}
            >
              Panel Spacer
            </MenuItem>
            <MenuItem
              onClick={() => Notes.createPanel(gun, sortedData)}
            >
              Notes
            </MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Box>
  </Panel>;
}

export default SimpleStageManager;