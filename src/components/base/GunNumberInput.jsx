import React from "react";
import { Text, HStack, Input } from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunNumberInput extends ReactGun {
  constructor(props) {
    super(props);

    this.state.test = false;
    this.inputRef = React.createRef();
    this.state.inputCache = "";
  }

  render() {
    if (this.state.gunData == null) return null;
    return (
      <HStack w="100%" px={2} spacing={0.5}>
        <Text>{this.props.title}</Text>
        <Input
          size="xs"
          value={
            document.activeElement === this.inputRef.current
              ? this.state.inputCache
              : this.state.gunData[this.props.gunProperty]
          }
          step={0.2}
          ref={this.inputRef}
          textAlign="right"
          onFocus={() =>
            this.setState({
              test: !this.state.test,
              inputCache: this.state.gunData[this.props.gunProperty],
            })
          }
          onChange={(e) => {
            this.state.inputCache = e.target.value;
            if (!isNaN(parseFloat(e.target.value)))
              this.props.gun
                .get(this.props.gunProperty)
                .put(parseFloat(e.target.value));
          }}
        ></Input>
      </HStack>
    );
  }
}

export default GunNumberInput;
