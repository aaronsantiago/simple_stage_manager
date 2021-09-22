import React from "react";
import UIPanels from "../components/UIPanels";
import ActiveEffects from "../components/ActiveEffects";
import Youtube from "../utils/Youtube";
import URLOverlay from "../utils/URLOverlay";
import Fade from "../utils/Fade";
import Shake from "../utils/Shake";
import HideMiroControls from "../utils/HideMiroControls";

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.gunBase = props.gun;
  }

  render() {
    return (
      <>
        <div>
          <h2>Create new panel</h2>
          {[
            ["Youtube", () => {Youtube.createPanel(this.gunBase)}],
            ["Fade", () => {Fade.createPanel(this.gunBase)}],
            ["Shake", () => {Shake.createPanel(this.gunBase)}],
            ["Hide Miro Controls", () => {HideMiroControls.createPanel(this.gunBase)}],
            ["Overlay", () => {URLOverlay.createPanel(this.gunBase)}],
            ["URL"]].map((el, i) => {
            return <button key={i} onClick={el[1]}> {el[0]} </button>
          })}
        </div>
        <UIPanels gun={this.gunBase.get("ui")} gunBase={this.gunBase}></UIPanels>
        <ActiveEffects gun={this.gunBase.get("activefx")}></ActiveEffects>
      </>
    );
  }
}

export default Controller;
