import React from "react";
import { map, sortBy } from "lodash";
import ReactGunMap from "../base/ReactGunMap";
import YouTube from "react-youtube";
import getVideoId from "get-video-id";
import { Box } from "@chakra-ui/layout";
import "./ViewerYoutubeEffect.css";

class ViewerYoutubeEffect extends ReactGunMap {
  constructor(props) {
    super(props);
    this.ytMap = {};
    this.state.videoLoaded = false;
  }

  render() {
    return (
      <>
        ;
        {map(
          sortBy(this.state.gunData, (o) => o?.timestamp),
          (data) => {
            if (
              data == null ||
              data.deleted === true ||
              data.type != "youtube" ||
              data.stopped === true ||
              !data.url ||
              data.url == ""
            ) {
              if (data != null) {
                if (this.ytMap[data.key] != null) {
                  this.ytMap[data.key] = null;
                }
              }
              return;
            }

            if (this.ytMap[data.key] != null && this.ytMap[data.key].h != null) {
              this.ytMap[data.key].setVolume(Math.floor(data.volume * 100));
            }
            return (
              <Box
                w="100vw"
                h="100vh"
                position={data.hidden ? null : "fixed"}
                top="0"
                left="0"
                key={"box" + data.key}
              >
                {data.hidden || this.ytMap[data.key] == null ? null : (
                  <Box
                    bg="black"
                    w="100%"
                    h="100%"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  ></Box>
                )}
                <YouTube
                  containerClassName={data.hidden ? "bingus" : "ytPlayer"}
                  key={data.key}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: { autoplay: 1, controls: 0 },
                  }}
                  videoId={getVideoId(data.url).id}
                  onReady={
                    (e) => {
                      this.ytMap[data.key] = e.target;
                      this.setState({
                        ...this.gunData,
                        videoLoaded: !this.state.videoLoaded,
                      });
                    }
                  }
                />
              </Box>
            );
          }
        )}
      </>
    );
  }
}

export default ViewerYoutubeEffect;
