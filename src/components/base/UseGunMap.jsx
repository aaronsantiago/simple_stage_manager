import { useEffect } from "react";
import ReactGun from "./ReactGun";
import useGun from "./UseGun";
import { useState } from "react";
import { useRef } from "react";
let syncCount = 0;
class ReactGunMap extends ReactGun {
  constructor(props) {
    super(props);
    this._gunCache = {};
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

function useGunMap(gunBase, sync=true) {
  const [gunData, setGunData] = useState({});
  const gunListener = useRef(null);
  const unmounted = useRef(false);

  useEffect(() => {
    unmounted.current = false;
    if (!sync) return;
    gunBase.map().on((property, key, _, ev) => {
      gunListener.current = ev;
      if (unmounted.current) {
        gunListener.current.off();
      }
      else {
        console.log("adding property ", key, property);
        setGunData((gd) => ({...gd, [key]: property}));
      }
    });

    return () => {
      if (!sync) return;
      unmounted.current = true;
      gunListener.current?.off();
    }
  }, [sync, gunBase]);
  return gunData;
}

export default useGunMap;
