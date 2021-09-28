import { uiId } from "./utils";

function createPanel(gun) {
  let id = uiId();
  let data = {
    type: "spacer",
    title: "New Section",
    key: id,
    deleted: false,
    timestamp: Date.now(),
  };
  gun.get("ui").get(id).put(data, console.log);
}

let Spacer = {
  createPanel,
};

export default Spacer;
