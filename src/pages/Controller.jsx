import React from "react";
import Gun from "gun/gun";
import UIPanels from "../components/UIPanels";
import ActiveEffects from "../components/ActiveEffects";
import Youtube from "../utils/Youtube";

var _ = require("lodash");
var gun = Gun({
  peers: [
    "http://gun-manhattan.herokuapp.com/gun",
    "https://aarondotwork-gun-server.herokuapp.com/gun",
  ],
});
let gunBase = gun.get("simple_stagemanager");
let ssmActivefx = gunBase.get("activefx");

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.gunListeners = {};
    this.state = {
      activefxMap: {},
    };
  }

  componentDidMount() {
    ssmActivefx.map().on((data, key, _, ev) => {
      this.gunListeners["ssmActivefx"] = ev;
      this.setState({ activefxMap: { ...this.state.activefxMap, [key]: data } });
    });
  }
  
  componentWillUnmount() {
    _.map(this.gunListeners, (listener, k) => {
      listener.off();
    })
  }

  render() {
    return (
      <>
        <div>
          <h2>Create new panel</h2>
          {[["Youtube", () => {Youtube.createPanel(gunBase)}], ["Effects"], ["Overlay"], ["URL"]].map((el, i) => {
            return <button key={i} onClick={el[1]}> {el[0]} </button>
          })}
        </div>
        <UIPanels gun={gunBase}></UIPanels>
        <ActiveEffects gun={gunBase}></ActiveEffects>
      </>
    );
  }
}

export default Controller;
