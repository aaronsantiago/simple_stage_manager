import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { withRouter } from "react-router";
import ViewerIFrame from "../components/ViewerIFrame";
import ViewerOverlayEffect from "../components/viewerEffects/ViewerOverlayEffect";
import ViewerYoutubeEffect from "../components/viewerEffects/ViewerYoutubeEffect";
import ViewerFadeEffect from "../components/viewerEffects/ViewerFadeEffect";
import ViewerShakeEffect from "../components/viewerEffects/ViewerShakeEffect";
import ViewerHideMiroControlsEffect from "../components/viewerEffects/ViewerHideMiroControls";

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.roomId = this.props.match.params.room_id;
    if (this.roomId == null) {
      this.gunBase = props.gun;
    } else {
      this.gunBase = props.gun.get(this.roomId);
    }
    this.state = { overlayDismissed: false };
  }

  render() {
    return (
      <>
        {this.state.overlayDismissed ? null : (
          <Box
            bg="black"
            color="white"
            zIndex="1000"
            position="absolute"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            onClick={() => {
              this.setState({ overlayDismissed: true });
            }}
          >
            <Center width="100vw" height="100vh">
              <Heading>click to begin</Heading>
            </Center>
          </Box>
        )}
        <ViewerShakeEffect gun={this.gunBase.get("activefx")}>
          <Box minW="100vw" minH="100vh" w="100%" h="100%">
            <ViewerHideMiroControlsEffect gun={this.gunBase.get("activefx")}>
              <ViewerIFrame w="100%" h="100%" gun={this.gunBase} />
            </ViewerHideMiroControlsEffect>
            <ViewerOverlayEffect gun={this.gunBase.get("activefx")} />
            <ViewerYoutubeEffect gun={this.gunBase.get("activefx")} />
            <ViewerFadeEffect gun={this.gunBase.get("activefx")} />
          </Box>
        </ViewerShakeEffect>
      </>
    );
  }
}

export default withRouter(Viewer);
