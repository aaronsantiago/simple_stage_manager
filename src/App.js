import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Manager from "./pages/Manager";
import Gun from "gun/gun";
import { chakraTheme } from "./utils/utils";
import Viewer from "./pages/Viewer";
import Home from "./pages/Home";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import DndTest from "./pages/DndTest";
const radix = require('gun/lib/radix');
const radisk = require('gun/lib/radisk');
const store = require('gun/lib/store');
const rindexed = require('gun/lib/rindexed');
const webrtc = require('gun/lib/webrtc');

var gun = Gun({
  peers: ["https://gun.threesigma.digital/gun"],
  radisk: radisk || false,
  localStorage: false
});
let gunBase = gun.get("simple_stage_manager_3b");

window.unusedUiIds = [];
window.currentActiveEffects = {};
window.currentActivePanels = {};

function App() {
  return (
    <HashRouter>
      <ChakraProvider theme={chakraTheme}>
        <DndProvider backend={HTML5Backend}>
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
              <Route path="/dnd_test">
                <DndTest />
              </Route>
              <Route path="/">
                <Home gun={gunBase} />
              </Route>
            </Switch>
          </div>
        </DndProvider>
      </ChakraProvider>
    </HashRouter>
  );
}

export default App;
