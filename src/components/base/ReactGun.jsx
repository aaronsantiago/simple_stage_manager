import React from "react";

class ReactGun extends React.Component {
  constructor(props) {
    super(props);
    this.gunBase = props.gun;
    this.state = { gunData: {} };
    this._gunListener = null;
    this._unmounted = false;
  }

  componentDidMount() {
    this.gunBase.on((property, _, __, ev) => {
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
    this._unmounted = true;
    this._gunListener?.off();
  }
}

export default ReactGun;
