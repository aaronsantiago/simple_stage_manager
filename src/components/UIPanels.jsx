import React from "react";
import { map, sortBy } from "lodash";
import YoutubePanel from "./panels/YoutubePanel";
import ReactGunMap from "./base/ReactGunMap";
import URLOverlayPanel from "./panels/URLOverlayPanel";
import FadePanel from "./panels/FadePanel";
import ShakePanel from "./panels/ShakePanel";
import HideMiroControlsPanel from "./panels/HideMiroControlsPanel";
import {
  Box,
  Grid,
  Center,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  MenuItem,
  ChevronDownIcon,
  Heading,
} from "@chakra-ui/react";
import Youtube from "../utils/Youtube";
import URLOverlay from "../utils/URLOverlay";
import Fade from "../utils/Fade";
import Shake from "../utils/Shake";
import HideMiroControls from "../utils/HideMiroControls";
import Panel from "./base/Panel";

class UIPanels extends ReactGunMap {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;
  }

  render() {
    return (
      <Box bg="none" h="100vh" position="relative">
        <Heading fontSize="5em" color="#FFF9"position="absolute" bottom="3" right="6" textAlign="right">
          control panels
        </Heading>
        <Box w="100%" h="100%" p={5} overflow="scroll">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            <Panel
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
                      <MenuButton
                        w="100%"
                        h="100%"
                        p="4"
                      >
                        Create new panel
                      </MenuButton>
                    </Button>
                    <MenuList color="black">
                      <MenuItem
                        onClick={() => Youtube.createPanel(this.rootGunBase)}
                      >
                        Youtube
                      </MenuItem>
                      <MenuItem
                        onClick={() => URLOverlay.createPanel(this.rootGunBase)}
                      >
                        URL Overlay
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem
                        onClick={() => Fade.createPanel(this.rootGunBase)}
                      >
                        Fade
                      </MenuItem>
                      <MenuItem
                        onClick={() => Shake.createPanel(this.rootGunBase)}
                      >
                        Shake
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          HideMiroControls.createPanel(this.rootGunBase)
                        }
                      >
                        Hide Miro Controls
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Center>
              </Box>
            </Panel>
            {map(
              sortBy(this.state.gunData, (o) => o?.timestamp),
              (el) => {
                if (el === null || el.deleted === true) return;
                let key = el.key;
                let defaultProps = {
                  key: key,
                  gun: this.gunBase.get(key),
                  gunBase: this.rootGunBase,
                };
                switch (el.type) {
                  case "youtube":
                    return <YoutubePanel {...defaultProps} />;
                  case "overlay":
                    return <URLOverlayPanel {...defaultProps} />;
                  case "fade":
                    return <FadePanel {...defaultProps} />;
                  case "shake":
                    return <ShakePanel {...defaultProps} />;
                  case "miro-hide":
                    return <HideMiroControlsPanel {...defaultProps} />;
                }
                return;
              }
            )}
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default UIPanels;
