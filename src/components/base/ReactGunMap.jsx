import ReactGun from "./ReactGun";

class ReactGunMap extends ReactGun {
  constructor(props) {
    super(props);
    this._gunCache = {};
    this.extraState = {};
  }

  componentDidMount() {
    this.gunBase.map().on((property, key, __, ev) => {
      this._gunListener = ev;
      this._gunCache = {
        ...(this._gunCache),
        [key]: property,
      };
      this.setState({
        ...this.state,
        gunData: this._gunCache,
      });
    });
  }
}

export default ReactGunMap;
