import { uuidv4 } from "./utils";

function createPanel(gun) {
  let id = uuidv4();
  let data = {
    type: "overlay",
    title: "New Overlay Effect",
    url: "",
    hidden: false,
    clickthrough: false,
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
      type: "overlay",
      key: data.key,
      uiRef: uiRef,
      deleted: false,
      title: data.title,
      url: data.url,
      clickthrough: data.clickthrough,
      hidden: data.hidden
    });
}

function stopEffect(gun) {
  gun
    .get("deleted")
    .put(true);
}

let URLOverlay = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default URLOverlay;
