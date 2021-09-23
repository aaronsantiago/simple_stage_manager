import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Controller from "./pages/Controller";
import Gun from "gun/gun";
import { extendTheme } from "@chakra-ui/react"
require("gun/lib/open.js");

var gun = Gun({
  peers: ["https://aarondotwork-gun-server.herokuapp.com/gun"],
});
let gunBase = gun.get("simple_stage_manager");

const theme = extendTheme({
  colors: {
    gray: {
      200: "#111",
    },
  },
  radii: {
    none: "0",
    sm: "0",
    base: "0",
    md: "0",
    lg: "0",
    xl: "0",
    "2xl": "0",
    "3xl": "0",
    full: "9999px",
  },
  components: {
    Button: {
      variants: {
        outline: {
          "borderLeft": 0,
          "borderRight": 0,
          "borderBottom": 0,
          "backgroundColor": "#FFF7",
        },
      },
    },
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div>

          <Switch>
            <Route path="/controller/:room_id">
              <Controller gun={gunBase} />
            </Route>
            <Route path="/controller">
              <Controller gun={gunBase} />
            </Route>
            <Route path="/v/:room_id">
              
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
