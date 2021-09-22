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
