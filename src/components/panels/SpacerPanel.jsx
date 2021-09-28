import React from "react";
import {
  Box,
  GridItem,
} from "@chakra-ui/react";
import Panel from "../base/Panel";
import GunInput from "../base/GunInput";

class SpacerPanel extends React.Component {
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

      <GridItem rowSpan={1} colSpan={{
        base: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}>
      <Panel
        onClose={this.deleteMe}
        onMoveUp={this.props.onMoveUp}
        onMoveDown={this.props.onMoveDown}
        bg="none"
        position="relative"
      >
        <Box p={3} >
          <GunInput
            mb={3}
            size="lg"
            fontSize="1em"
            placeholder="Title"
            fontWeight="bold"
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

export default SpacerPanel;
