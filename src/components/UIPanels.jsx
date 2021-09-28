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
  Heading,
} from "@chakra-ui/react";
import SimpleStageManager from "./SimpleStageManager";
import SpacerPanel from "./panels/SpacerPanel";

class UIPanels extends ReactGunMap {

  componentDidUpdate() {
    window.unusedUiIds = [];
    map(this.state.gunData, (el, key) => {
      if (el == null || el.deleted) {
        window.unusedUiIds.push(key);
      }
    })
  }

  render() {
    let sortedData = sortBy(this.state.gunData, (o) => (o?.timestamp ? -o.timestamp : null));
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
            <SimpleStageManager gun={this.props.gunBase}/>
            {map(
              sortedData,
              (el, i) => {
                if (el === null || el.deleted === true) return;
                let key = el.key;
                let defaultProps = {
                  key: key,
                  gun: this.gunBase.get(key),
                  gunBase: this.props.gunBase,
                  data: el,
                };
                if (i > 0) {
                  defaultProps.onMoveUp = () => {
                    this.gunBase.get(key).get("timestamp").put(
                      sortedData[i - 1].timestamp
                    );
                    this.gunBase.get(sortedData[i - 1].key).get("timestamp").put(
                      el.timestamp
                    );
                  }
                }
                if (i < sortedData.length - 1) {
                  defaultProps.onMoveDown = () => {
                    this.gunBase.get(key).get("timestamp").put(
                      sortedData[i + 1].timestamp
                    );
                    this.gunBase.get(sortedData[i + 1].key).get("timestamp").put(
                      el.timestamp
                    );
                  }
                }
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
                  case "spacer":
                    return <SpacerPanel {...defaultProps} />;
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
