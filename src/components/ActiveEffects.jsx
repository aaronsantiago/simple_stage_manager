import React from "react";
import { map } from "lodash";
import ReactGunMap from "./base/ReactGunMap";
import YoutubeEffect from "./effects/YoutubeEffect";
import URLOverlayEffect from "./effects/URLOverlayEffect";
import FadeEffect from "./effects/FadeEffect";
import ShakeEffect from "./effects/ShakeEffect";
import HideMiroControlEffect from "./effects/HideMiroControlsEffect";

class ActiveEffects extends ReactGunMap {
  render() {
    return (
      <div>
        <h2>Active Effects</h2>
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
          return <div key={key}> {el.title}</div>;
        })}
      </div>
    );
  }
}

export default ActiveEffects;
