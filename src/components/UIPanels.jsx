import React from "react";
import { map } from "lodash";
import YoutubePanel from "./panels/YoutubePanel";
import ReactGunMap from "./base/ReactGunMap";
import URLOverlayPanel from "./panels/URLOverlayPanel";
import FadePanel from "./panels/FadePanel";
import ShakePanel from "./panels/ShakePanel";
import HideMiroControlsPanel from "./panels/HideMiroControlsPanel";
import { Box, Heading, Grid } from "@chakra-ui/react";

class UIPanels extends ReactGunMap {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;
  }

  render() {
    return (
      <Box>
        <Heading>Available Panels</Heading>
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
          })}
        </Grid>
      </Box>
    );
  }
}

export default UIPanels;
