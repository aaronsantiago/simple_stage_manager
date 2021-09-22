import React from "react";

class ReactGun extends React.Component {
  constructor(props) {
    super(props);
    this.gunBase = props.gun;
    this.state = { gunData: {} };
    this._gunListener = null;
  }

  componentDidMount() {
    this.gunBase.on((property, _, __, ev) => {
      this._gunListener = ev;
      this.setState({
        gunData: property,
      });
    });
  }

  componentWillUnmount() {
    this._gunListener.off();
  }
}

export default ReactGun;
