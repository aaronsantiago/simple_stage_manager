import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("miro-hide", "New Miro Hide Controls Effect", sortedData);

  gun.get("ui").get(data.id).put(data, console.log);
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
  gun.put(null);
}

let HideMiroControls = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default HideMiroControls;
