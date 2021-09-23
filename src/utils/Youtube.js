import { uuidv4 } from "./utils";

function createPanel(gun) {
  let id = uuidv4();
  let data = {
    type: "youtube",
    title: "New Youtube Effect",
    url: "",
    hidden: false,
    key: id,
    deleted: false,
    volume: 1,
    timestamp: Date.now(),
  };
  gun.get("ui").get(id).put(data, console.log);
}

function activateEffect(gun, data) {
  let uiRef = gun.get("ui").get(data.key);
  gun
    .get("activefx")
    .get("activefx" + data.key)
    .put({
      type: "youtube",
      stopped: false,
      startTime: Date.now(),
      key: data.key,
      uiRef: uiRef,
      deleted: false,
      title: data.title,
      url: data.url,
      hidden: data.hidden,
      volume: data.volume,
      timestamp: Date.now(),
  });
}

function stopEffect(gun) {
  gun
    .get("stopped")
    .put(true);
}

let Youtube = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default Youtube;
