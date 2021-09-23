import React from "react";
import {
  Box,
} from "@chakra-ui/react";
import { withRouter } from "react-router";
import ViewerIFrame from "../components/ViewerIFrame";
import IFrame from "../components/IFrame";
import ViewerOverlayEffect from "../components/viewerEffects/ViewerOverlayEffect";
import ViewerYoutubeEffect from "../components/viewerEffects/ViewerYoutubeEffect";
import ViewerFadeEffect from "../components/viewerEffects/ViewerFadeEffect";
import ViewerShakeEffect from "../components/viewerEffects/ViewerShakeEffect";

class Viewer extends React.Component {
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
        <ViewerShakeEffect gun={this.gunBase.get("activefx")}>
          <Box minW="100vw" minH="100vh">
            <ViewerIFrame w="100%" h="100%" gun={this.gunBase} />
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
