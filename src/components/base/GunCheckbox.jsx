import React from "react";
import { HStack, Text, Checkbox, Box, Center} from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunCheckbox extends ReactGun {
  constructor(props) {
    super(props, props.sync == undefined ? true : props.sync);

    this.state.test = false;
    this.inputRef = React.createRef();
  }

  render() {
    if (this.state.gunData == null && this.props.value == null) return null;
    let value = this.props.value;
    if (value == null) value = this.state.gunData[this.props.gunProperty];
    return (
      <HStack w="100%" px={2} spacing={0.5}>
        <Text w="100%">{this.props.title}</Text>
        <Box align="right">
          <Center>
          <Checkbox
            size="lg" 
            ref={this.inputRef}
            isChecked={value}
            onChange={(e) => {
              this.props.gun
                .get(this.props.gunProperty)
                .put(this.inputRef.current.checked);
            }}
            
          ></Checkbox>
          </Center>
        </Box>
      </HStack>
    );
  }
}

export default GunCheckbox;
