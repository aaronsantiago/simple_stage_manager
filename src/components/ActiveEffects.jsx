import React from "react";
import { map } from "lodash";
import YoutubeEffect from "./effects/YoutubeEffect";

class ActiveEffects extends React.Component {
  constructor(props) {
    super(props);
    this.gunBase = props.gun.get("activefx");
    this.state = { activefxMap: {} };
    this.gunListeners = {};
  }

  componentDidMount() {
    this.gunBase.map().on((panel, key, _, ev) => {
      this.gunListeners["activefxMap"] = ev;
      this.setState({
        activefxMap: {
          ...(this.state.activefxMap),
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
        <h2>Active Effects</h2>
        {map(this.state.activefxMap, (el, key) => {
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
