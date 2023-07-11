import { extendTheme } from "@chakra-ui/react";
import { getPrevSortValue } from "./reordersort";

function shortUuid() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function uiId() {
  let id = uuidv4();
  if (window.unusedUiIds.length > 0) {
    id = window.unusedUiIds.pop();
  }
  return id;
}

const chakraTheme = extendTheme({
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
          borderLeft: 0,
          borderRight: 0,
          borderBottom: 0,
          backgroundColor: "#FFF7",
        },
      },
    },
  },
});

let createBasePanel = (type, title, sortedData) => {
  let id = uiId();
  let data = {
    type: type,
    title: title,
    key: id,
    deleted: false,
    timestamp: Date.now(),
    sortValue: getPrevSortValue(sortedData[0]?.sortValue || "a"),
  };
  return data;
}

export { uuidv4, uiId, shortUuid, chakraTheme, createBasePanel };
