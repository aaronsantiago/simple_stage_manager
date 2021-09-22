import React from "react";
import { map } from "lodash";
import YoutubeEffect from "./effects/YoutubeEffect";
import ReactGunMap from "./base/ReactGunMap";

class ActiveEffects extends ReactGunMap {

  render() {
    return (
      <div>
        <h2>Active Effects</h2>
        {map(this.state.gunData, (el, key) => {
          if (el === null || el.deleted === true) return;
          switch (el.type) {
            case "youtube":
              return <YoutubeEffect gun={this.gunBase.get(key)} />;
            default:
              return <div key={key}> {el.title}</div>;
          }
        })}
      </div>
    );
  }
}

export default ActiveEffects;
