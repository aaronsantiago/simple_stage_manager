import React from "react";
import { map } from "lodash";
import YoutubePanel from "./panels/YoutubePanel";
import ReactGunMap from "./base/ReactGunMap";

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
          switch(el.type) {
            case "youtube":
              return <YoutubePanel key={key} gun={this.gunBase.get(key)} gunBase={this.rootGunBase}/>
          }
          return;
        })}
      </div>
    );
  }
}

export default UIPanels;
