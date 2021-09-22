import React from "react";
import { map } from "lodash";
import YoutubePanel from "./panels/YoutubePanel";
import ReactGunMap from "./base/ReactGunMap";
import URLOverlayPanel from "./panels/URLOverlayPanel";
import FadePanel from "./panels/FadePanel";
import ShakePanel from "./panels/ShakePanel";
import HideMiroControlsPanel from "./panels/HideMiroControlsPanel";

class UIPanels extends ReactGunMap {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;
  }

  render() {
    return (
      <div>
        <h2>Available Panels</h2>
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
      </div>
    );
  }
}

export default UIPanels;
