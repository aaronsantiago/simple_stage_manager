import React from "react";
import { map, sortBy } from "lodash";
import ReactGunMap from "../base/ReactGunMap";

class ViewerOverlayEffect extends ReactGunMap {
  render() {
    return map(
      sortBy(this.state.gunData, (o) => o.timestamp),
      (el) => {
        if (el === null || el.deleted === true || el.type != "overlay") return;
        return (
          <iframe
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: "0",
              left: "0",
              pointerEvents: el.clickthrough ? "none" : "auto",
              zindex: el.hidden ? -10000 : 0
            }}
            
            src={el.url}
          />
        );
      }
    );
  }
}

export default ViewerOverlayEffect;
