import ReactGun from "./ReactGun";

class ReactGunMap extends ReactGun {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.gunBase.map().on((property, key, __, ev) => {
      this._gunListener = ev;
      this.setState({
        gunData: {
          ...(this.state.gunData),
          [key]: property,
        },
      });
    });
  }
}

export default ReactGunMap;
