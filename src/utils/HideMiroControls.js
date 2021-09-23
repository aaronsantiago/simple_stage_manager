import { uuidv4 } from "./utils";

function createPanel(gun) {
  let id = uuidv4();
  let data = {
    type: "miro-hide",
    title: "New Miro Hide Controls Effect",
    key: id,
    deleted: false,
    timestamp: Date.now(),
  };
  gun.get("ui").get(id).put(data, console.log);
}

function activateEffect(gun, data) {
  gun
    .get("activefx")
    .get("activefx" + data.key)
    .put({
      type: "miro-hide",
      startTime: Date.now(),
      key: data.key,
      deleted: false,
      title: data.title,
      timestamp: Date.now(),
    });
}

function stopEffect(gun) {
  gun.get("deleted").put(true);
}

let HideMiroControls = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default HideMiroControls;
