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

function SimpleStageManager({gun}) {
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
            <MenuItem onClick={() => Youtube.createPanel(gun)}>
              Youtube
            </MenuItem>
            <MenuItem onClick={() => URLOverlay.createPanel(gun)}>
              URL Overlay
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => Fade.createPanel(gun)}>
              Fade
            </MenuItem>
            <MenuItem onClick={() => Shake.createPanel(gun)}>
              Shake
            </MenuItem>
            <MenuItem
              onClick={() => HideMiroControls.createPanel(gun)}
            >
              Hide Miro Controls
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onClick={() => Spacer.createPanel(gun)}
            >
              Panel Spacer
            </MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Box>
  </Panel>;
}

export default SimpleStageManager;