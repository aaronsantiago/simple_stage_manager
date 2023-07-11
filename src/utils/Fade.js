import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("fade", "New Fade Effect", sortedData);
 
  gun.get("ui").get(data.key).put(data, console.log);
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
