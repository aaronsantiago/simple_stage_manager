import React from "react";
import { map, sortBy } from "lodash";
import ReactGunMap from "./base/ReactGunMap";
import YoutubeEffect from "./effects/YoutubeEffect";
import URLOverlayEffect from "./effects/URLOverlayEffect";
import FadeEffect from "./effects/FadeEffect";
import ShakeEffect from "./effects/ShakeEffect";
import HideMiroControlEffect from "./effects/HideMiroControlsEffect";
import { Box, Heading, Grid } from "@chakra-ui/react";
import ViewerInfo from "./ViewerInfo";

class ActiveEffects extends ReactGunMap {
  render() {
    window.currentActiveEffects = {};
    return (
      <Box
        p={4}
        w={{
          base: "200px",
          xl: "400px",
        }}
        bg="#FFF9"
        position="relative"
        h="100%"
      >
        <Heading
          fontSize="3em"
          color="#D0C5D0"
          position="absolute"
          bottom="3"
          left="3"
          verticalAlign="bottom"
        >
          active effects
        </Heading>
        <Box h="100%" overflow="scroll">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              xl: "repeat(2, 1fr)",
              // md: "repeat(3, 1fr)",
              // lg: "repeat(4, 1fr)",
              // xl: "repeat(5, 1fr)",
            }}
            gap={4}
          >
            <ViewerInfo roomId={this.roomId} gun={this.gunBase} />
            {map(
              sortBy(this.state.gunData, (o) =>
                o?.timestamp ? -o.timestamp : null
              ),
              (el) => {
                if (el === null || el.deleted === true) return;
                window.currentActiveEffects[el.key] = true;
                let key = "activefx" + el.key;
                let defaultProps = {
                  key: key,
                  gun: this.gunBase.get(key),
                  data: el,
                };
                switch (el.type) {
                  case "youtube":
                    return <YoutubeEffect {...defaultProps} />;
                  case "overlay":
                    return <URLOverlayEffect {...defaultProps} />;
                  case "fade":
                    return <FadeEffect {...defaultProps} />;
                  case "shake":
                    return <ShakeEffect {...defaultProps} />;
                  case "miro-hide":
                    return <HideMiroControlEffect {...defaultProps} />;
                }
                return null;
              }
            )}
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default ActiveEffects;
