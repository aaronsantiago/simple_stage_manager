import { uuidv4 } from "./utils";

function createPanel(gun) {
  let id = uuidv4();
  let data = {
    type: "shake",
    title: "New Shake Effect",
    key: id,
    deleted: false,
    duration: 10,
    strength: 1,
  };
  gun.get("ui").get(id).put(data, console.log);
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
    });
}

function stopEffect(gun) {
  gun.get("deleted").put(true);
}

let Fade = {
  createPanel,
  activateEffect,
  stopEffect,
};

export default Fade;
