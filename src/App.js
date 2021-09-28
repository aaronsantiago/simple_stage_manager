import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Manager from "./pages/Manager";
import Gun from "gun/gun";
import { chakraTheme } from "./utils/utils";
import Viewer from "./pages/Viewer";
import Home from "./pages/Home";
require("gun/lib/open.js");

var gun = Gun({
  peers: ["https://aarondotwork-gun-server.herokuapp.com/gun"],
});
let gunBase = gun.get("simple_stage_manager");
window.unusedUiIds = [];
window.unusedAeIds = [];

function App() {
  return (
    <HashRouter>
      <ChakraProvider theme={chakraTheme}>
        <div>
          <Switch>
            <Route path="/manager/:room_id">
              <Manager gun={gunBase} />
            </Route>
            <Route path="/manager">
              <Manager gun={gunBase} />
            </Route>
            <Route path="/v/:room_id">
              <Viewer gun={gunBase} />
            </Route>
            <Route path="/">
              <Home gun={gunBase} />
            </Route>
          </Switch>
        </div>
      </ChakraProvider>
    </HashRouter>
  );
}

export default App;
