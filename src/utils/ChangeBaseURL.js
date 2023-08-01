
import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("changebaseurl", "New Change Base URL Effect", sortedData);
  
  data.url = "";

  gun.get("ui").get(data.key).put(data, console.log);
}

function activateEffect(gun, data) {
  let uiRef = gun.get("ui").get(data.key);
  gun
    .get("url")
    .put(data.url);
}

let ChangeBaseURL = {
  createPanel,
  activateEffect,
};

export default ChangeBaseURL;
