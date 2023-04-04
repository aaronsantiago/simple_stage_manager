import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Manager from "./pages/Manager";
import Gun from "gun/gun";
import { chakraTheme } from "./utils/utils";
import Viewer from "./pages/Viewer";
import Home from "./pages/Home";
const radix = require('gun/lib/radix');
const radisk = require('gun/lib/radisk');
const store = require('gun/lib/store');
const rindexed = require('gun/lib/rindexed');
const webrtc = require('gun/lib/webrtc');

var gun = Gun({
  peers: ["https://gun-manhattan.herokuapp.com/gun"],
  radisk: radisk || false,
  localStorage: false
});
let gunBase = gun.get("simple_stage_manager_2");

window.unusedUiIds = [];
window.currentActiveEffects = {};
window.currentActivePanels = {};

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
