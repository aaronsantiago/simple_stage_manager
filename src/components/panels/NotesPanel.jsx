import React from "react";
import { Box, Textarea, GridItem } from "@chakra-ui/react";
import Panel from "../base/Panel";
import GunInput from "../base/GunInput";
import GunTextArea from "../base/GunTextArea";

class NotesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.rootGunBase = props.gunBase;

    this.deleteMe = this.deleteMe.bind(this);
  }

  deleteMe() {
    this.props.gun.put(null);
  }

  render() {
    if (!this.props.data) return null;
    return (
      <GridItem rowSpan={2} colSpan={1}>
        <Panel
          onClose={this.deleteMe}
          onMoveUp={this.props.onMoveUp}
          onMoveDown={this.props.onMoveDown}
          bg="none"
          position="relative"
        >
          <Box p={3}
              w={"100%"}
              h={"100%"} pb={7}>
            <GunTextArea
              resize="none"
              w={"100%"}
              h={"100%"}
              // textOverflow="ellipsis"
              // placeholder="Title"
              gun={this.props.gun}
              gunProperty="title"
              sync={false}
              value={this.props.data.title}
            />
          </Box>
        </Panel>
      </GridItem>
    );
  }
}

export default NotesPanel;
