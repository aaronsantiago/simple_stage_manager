import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("youtube", "New Youtube Effect", sortedData);
  
  data.url = "";
  data.hidden = true;
  data.volume = 1;
  gun.get("ui").get(data.id).put(data, console.log);
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
  gun.put(null);
}

let Youtube = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default Youtube;
