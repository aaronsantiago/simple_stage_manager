import { uiId } from "./utils";

function createPanel(gun) {
  let id = uiId();
  let data = {
    type: "fade",
    title: "New Fade Effect",
    key: id,
    deleted: false,
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
      type: "fade",
      key: data.key,
      deleted: false,
      title: data.title,
      timestamp: Date.now(),
    });
}

function stopEffect(gun) {
  gun.get("deleted").put(true);
  gun.put(null);
}

let Fade = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default Fade;
