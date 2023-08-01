import { useEffect, useRef, useState } from "react";

let syncCount = 0;

function useGun(gunBase, sync=true) {
  const [gunData, setGunData] = useState(null);
  const gunListener = useRef(null);
  const unmounted = useRef(false);

  useEffect(() => {
    unmounted.current = false;
    if (!sync) return;
    gunBase.on((property, _, __, ev) => {
      gunListener.current = ev;
      if (unmounted.current) {
        gunListener.current.off();
      }
      else {
        setGunData(property);
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

export default useGun;
