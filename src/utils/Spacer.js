import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("spacer", "New Section", sortedData);

  gun.get("ui").get(data.id).put(data, console.log);
}

let Spacer = {
  createPanel,
};

export default Spacer;
