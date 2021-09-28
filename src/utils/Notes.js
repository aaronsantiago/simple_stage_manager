import { uiId } from "./utils";

function createPanel(gun) {
  let id = uiId();
  let data = {
    type: "notes",
    title: "New Notes",
    key: id,
    deleted: false,
    timestamp: Date.now(),
  };
  gun.get("ui").get(id).put(data, console.log);
}

let Notes = {
  createPanel,
};

export default Notes;
