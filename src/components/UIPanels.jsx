import React from "react";
import { map, sortBy } from "lodash";
import YoutubePanel from "./panels/YoutubePanel";
import ReactGunMap from "./base/ReactGunMap";
import URLOverlayPanel from "./panels/URLOverlayPanel";
import FadePanel from "./panels/FadePanel";
import ShakePanel from "./panels/ShakePanel";
import NotesPanel from "./panels/NotesPanel";
import HideMiroControlsPanel from "./panels/HideMiroControlsPanel";
import {
  Box,
  Grid,
  Heading,
} from "@chakra-ui/react";
import SimpleStageManager from "./SimpleStageManager";
import SpacerPanel from "./panels/SpacerPanel";
import ChangeBaseURLPanel from "./panels/ChangeBaseURLPanel";
import { getNumberBetween } from "../utils/reordersort";
import useGun from "./base/UseGun";
import useGunMap from "./base/UseGunMap";

function UIPanels({gun, gunBase, ...props}) {

  let gunData = useGunMap(gun, true);
  
  window.unusedUiIds = [];
  map(gunData, (el, key) => {
    if (el == null || el.deleted) {
      window.unusedUiIds.push(key);
    }
  });
  
  let sortedData = sortBy(gunData, (o) => (o?.sortValue ? o.sortValue : null));
  return (
    <Box bg="none" h="100vh" position="relative">
      <Heading fontSize="5em" color="#FFF9"position="absolute" bottom="3" right="6" textAlign="right">
        control panels
      </Heading>
      <Box w="100%" h="100%" p={5} overflowY="scroll">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          <SimpleStageManager gun={gunBase} sortedData={sortedData}/>
          {map(
            sortedData,
            (el, i) => {
              if (el === null || el.deleted === true) return;
              let key = el.key;
              let defaultProps = {
                key: key,
                gun: gun.get(key),
                gunBase: gunBase,
                data: el,
              };
              if (i > 0) {
                defaultProps.onMoveUp = () => {
                  let prev = sortedData[i - 1];
                  let prevSortValue = prev.sortValue;
                  let prevPrev = sortedData[i - 2];
                  let prevPrevSortValue = "";
                  if (prevPrev) {
                    prevPrevSortValue = prevPrev.sortValue;
                  }
                  gun.get(key).get("sortValue").put(
                    getNumberBetween(prevPrevSortValue, prevSortValue)
                  );
                }
              }
              if (i < sortedData.length - 1) {
                defaultProps.onMoveDown = () => {
                  let next = sortedData[i + 1];
                  let nextSortValue = next.sortValue;
                  let nextNext = sortedData[i + 2];
                  let nextNextSortValue = "";
                  if (nextNext) {
                    nextNextSortValue = nextNext.sortValue;
                  }
                  gun.get(key).get("sortValue").put(
                    getNumberBetween(nextSortValue, nextNextSortValue)
                  );
                }
              }
              switch (el.type) {
                case "youtube":
                  return <div>{sortedData[i].sortValue}<YoutubePanel {...defaultProps} /></div>;
                case "overlay":
                  return <div>{sortedData[i].sortValue}<URLOverlayPanel {...defaultProps} /></div>;
                case "fade":
                  return <div>{sortedData[i].sortValue}<FadePanel {...defaultProps} /></div>;
                case "shake":
                  return <div>{sortedData[i].sortValue}<ShakePanel {...defaultProps} /></div>;
                case "miro-hide":
                  return <div>{sortedData[i].sortValue}<HideMiroControlsPanel {...defaultProps} /></div>;
                case "spacer":
                  return <div>{sortedData[i].sortValue}<SpacerPanel {...defaultProps} /></div>;
                case "notes":
                  return <div>{sortedData[i].sortValue}<NotesPanel {...defaultProps} /></div>;
                  case "changebaseurl":
                    return <div>{sortedData[i].sortValue}<ChangeBaseURLPanel {...defaultProps} /></div>;
              }
              return;
            }
          )}
        </Grid>
      </Box>
    </Box>
  );
}


class UIPanelsOld extends ReactGunMap {

  componentDidUpdate() {
    window.unusedUiIds = [];
    map(this.state.gunData, (el, key) => {
      if (el == null || el.deleted) {
        window.unusedUiIds.push(key);
      }
    })
  }

  render() {
    let sortedData = sortBy(this.state.gunData, (o) => (o?.sortValue ? o.sortValue : null));
    return (
      <Box bg="none" h="100vh" position="relative">
        <Heading fontSize="5em" color="#FFF9"position="absolute" bottom="3" right="6" textAlign="right">
          control panels
        </Heading>
        <Box w="100%" h="100%" p={5} overflowY="scroll">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            <SimpleStageManager gun={this.props.gunBase} sortedData={sortedData}/>
            {map(
              sortedData,
              (el, i) => {
                if (el === null || el.deleted === true) return;
                let key = el.key;
                let defaultProps = {
                  key: key,
                  gun: this.gunBase.get(key),
                  gunBase: this.props.gunBase,
                  data: el,
                };
                if (i > 0) {
                  defaultProps.onMoveUp = () => {
                    let prev = sortedData[i - 1];
                    let prevSortValue = prev.sortValue;
                    let prevPrev = sortedData[i - 2];
                    let prevPrevSortValue = "";
                    if (prevPrev) {
                      prevPrevSortValue = prevPrev.sortValue;
                    }
                    this.gunBase.get(key).get("sortValue").put(
                      getNumberBetween(prevPrevSortValue, prevSortValue)
                    );
                  }
                }
                if (i < sortedData.length - 1) {
                  defaultProps.onMoveDown = () => {
                    let next = sortedData[i + 1];
                    let nextSortValue = next.sortValue;
                    let nextNext = sortedData[i + 2];
                    let nextNextSortValue = "";
                    if (nextNext) {
                      nextNextSortValue = nextNext.sortValue;
                    }
                    this.gunBase.get(key).get("sortValue").put(
                      getNumberBetween(nextSortValue, nextNextSortValue)
                    );
                  }
                }
                switch (el.type) {
                  case "youtube":
                    return <div>{sortedData[i].sortValue}<YoutubePanel {...defaultProps} /></div>;
                  case "overlay":
                    return <div>{sortedData[i].sortValue}<URLOverlayPanel {...defaultProps} /></div>;
                  case "fade":
                    return <div>{sortedData[i].sortValue}<FadePanel {...defaultProps} /></div>;
                  case "shake":
                    return <div>{sortedData[i].sortValue}<ShakePanel {...defaultProps} /></div>;
                  case "miro-hide":
                    return <div>{sortedData[i].sortValue}<HideMiroControlsPanel {...defaultProps} /></div>;
                  case "spacer":
                    return <div>{sortedData[i].sortValue}<SpacerPanel {...defaultProps} /></div>;
                  case "notes":
                    return <div>{sortedData[i].sortValue}<NotesPanel {...defaultProps} /></div>;
                    case "changebaseurl":
                      return <div>{sortedData[i].sortValue}<ChangeBaseURLPanel {...defaultProps} /></div>;
                }
                return;
              }
            )}
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default UIPanels;
