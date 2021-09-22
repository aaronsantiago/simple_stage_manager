import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Controller from "./pages/Controller";
import Gun from "gun/gun";
require("gun/lib/open.js");

var gun = Gun({
  peers: ["https://aarondotwork-gun-server.herokuapp.com/gun"],
});
let gunBase = gun.get("simple_stage_manager");

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Controller gun={gunBase} />
            </Route>
            {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
