import React from "react";
import UIPanels from "../components/UIPanels";
import ActiveEffects from "../components/ActiveEffects";
import Youtube from "../utils/Youtube";

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
          {[["Youtube", () => {Youtube.createPanel(this.gunBase)}], ["Effects"], ["Overlay"], ["URL"]].map((el, i) => {
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
