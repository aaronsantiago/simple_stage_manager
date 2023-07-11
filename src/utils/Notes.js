import { createBasePanel } from "./utils";

function createPanel(gun, sortedData) {
  let data = createBasePanel("notes", "New Notes", sortedData);
  
  gun.get("ui").get(data.id).put(data, console.log);
}

let Notes = {
  createPanel,
};

export default Notes;
