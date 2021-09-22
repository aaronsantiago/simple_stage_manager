import ReactGun from "./ReactGun";

class ReactGunMap extends ReactGun {
  constructor(props) {
    super(props);
    this._gunCache = {};
  }

  componentDidMount() {
    this.gunBase.map().on((property, key, __, ev) => {
      this._gunListener = ev;
      this._gunCache = {
        ...(this._gunCache),
        [key]: property,
      };
      this.setState({
        gunData: this._gunCache,
      });
    });
  }
}

export default ReactGunMap;
