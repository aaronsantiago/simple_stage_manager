import React from "react";
import { map } from "lodash";
import ReactGunMap from "./base/ReactGunMap";
import YoutubeEffect from "./effects/YoutubeEffect";
import URLOverlayEffect from "./effects/URLOverlayEffect";
import FadeEffect from "./effects/FadeEffect";
import ShakeEffect from "./effects/ShakeEffect";
import HideMiroControlEffect from "./effects/HideMiroControlsEffect";
import {Box, Heading, Grid} from "@chakra-ui/react"

class ActiveEffects extends ReactGunMap {
  render() {
    return (
      <Box>
        <Heading>Active Effects</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap={4}
        >
        {map(this.state.gunData, (el, key) => {
          if (el === null || el.deleted === true) return;
          let defaultProps = { key: key, gun: this.gunBase.get(key) };
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
        })}
        </Grid>
      </Box>
    );
  }
}

export default ActiveEffects;
