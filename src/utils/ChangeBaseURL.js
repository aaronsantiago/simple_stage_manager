import { uiId } from "./utils";

function createPanel(gun) {
  let id = uiId();
  let data = {
    type: "changebaseurl",
    title: "New Change Base URL Effect",
    url: "",
    key: id,
    deleted: false,
    timestamp: Date.now(),
  };
  gun.get("ui").get(id).put(data, console.log);
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
