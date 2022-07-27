import ReactGun from "./ReactGun";
let syncCount = 0;
class ReactGunMap extends ReactGun {
  constructor(props) {
    super(props);
    this._gunCache = {};
    this.extraState = {};
    this._gunListener = null;
    this._unmounted = false;
  }

  componentDidMount() {
    this.gunBase.map().on((property, key, __, ev) => {
      console.log(Date.now() + " gun map sync " + syncCount++ + " " + key + " " + JSON.stringify(property));
      this._gunListener = ev;
      if (this._unmounted) {
        this._gunListener.off();
      }
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

  componentWillUnmount() {
    this._unmounted = true;
    this._gunListener?.off();
  }
}

export default ReactGunMap;
