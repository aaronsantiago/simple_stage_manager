import React from "react";
import { map, sortBy } from "lodash";
import ReactGunMap from "../base/ReactGunMap";
import IFrame from "../IFrame";

class ViewerOverlayEffect extends ReactGunMap {
  render() {
    return map(
      sortBy(this.state.gunData, (o) => o.timestamp),
      (el) => {
        if (el === null || el.deleted === true || el.type != "overlay") return;
        return (
          <IFrame
            pointerEvents={el.clickthrough ? "none" : "auto"}
            hidden={el.hidden}
            src={el.url}
          />
        );
      }
    );
  }
}

export default ViewerOverlayEffect;
