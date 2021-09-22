import React from "react";
import { map } from "lodash";
import YoutubePanel from "./panels/YoutubePanel";

class UIPanels extends React.Component {
  constructor(props) {
    super(props);
    this.myGunBase = props.gun.get("ui");
    this.gunBase = props.gun;
    this.state = { panelMap: {} };
    this.gunListeners = {};
  }

  componentDidMount() {
    this.myGunBase.map().on((panel, key, _, ev) => {
      this.gunListeners["panelMap"] = ev;
      this.setState({
        panelMap: {
          ...(this.state.panelMap),
          [key]: panel,
        },
      });
    });
  }

  componentWillUnmount() {
    map(this.gunListeners, (listener) => {
      listener.off();
    });
  }

  render() {
    return (
      <div>
        <h2>Available Panels</h2>
        {map(this.state.panelMap, (el, key) => {
          if (el === null || el.deleted === true) return;
          switch(el.type) {
            case "youtube":
              return <YoutubePanel key={key} gun={this.myGunBase.get(key)} gunBase={this.gunBase}/>
          }
          return;
        })}
      </div>
    );
  }
}

export default UIPanels;
