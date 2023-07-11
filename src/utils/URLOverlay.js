import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("overlay", "New Overlay Effect", sortedData);
  
  data.url = "";
  data.hidden = false;
  data.clickthrough = false;

  gun.get("ui").get(data.id).put(data, console.log);
}

function activateEffect(gun, data) {
  let uiRef = gun.get("ui").get(data.key);
  gun
    .get("activefx")
    .get("activefx" + data.key)
    .put({
      type: "overlay",
      key: data.key,
      uiRef: uiRef,
      deleted: false,
      title: data.title,
      url: data.url,
      clickthrough: data.clickthrough,
      hidden: data.hidden,
      timestamp: Date.now(),
    });
}

function stopEffect(gun) {
  gun
    .get("deleted")
    .put(true);
    gun.put(null);
  }

let URLOverlay = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default URLOverlay;
