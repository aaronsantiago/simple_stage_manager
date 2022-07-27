import React from "react";
let syncCount = 0;
class ReactGun extends React.Component {
  constructor(props, sync=true) {
    super(props);
    this.gunBase = props.gun;
    this.state = { gunData: {} };
    this._gunListener = null;
    this._unmounted = false;
    this.sync = sync;
  }

  componentDidMount() {
    if (!this.sync) return;
    this.gunBase.on((property, _, __, ev) => {
      console.log(Date.now() + " gun sync " + syncCount++ + " " + JSON.stringify(property));
      this._gunListener = ev;
      if (this._unmounted) {
        this._gunListener.off();
      }
      else {
        this.setState({
          ...this.state,
          gunData: property,
        });
      }
    });
  }

  componentWillUnmount() {
    if (!this.sync) return;
    this._unmounted = true;
    this._gunListener?.off();
  }
}

export default ReactGun;
