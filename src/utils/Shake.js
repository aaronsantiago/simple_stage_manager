import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("shake", "New Shake Effect", sortedData);
  data.duration = 3;
  data.strength = 1;
  gun.get("ui").get(data.id).put(data, console.log);
}

function activateEffect(gun, data) {
  gun
    .get("activefx")
    .get("activefx" + data.key)
    .put({
      type: "shake",
      startTime: Date.now(),
      key: data.key,
      deleted: false,
      title: data.title,
      duration: data.duration,
      strength: data.strength,
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
