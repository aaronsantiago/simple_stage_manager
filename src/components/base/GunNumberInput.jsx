import React from "react";
import { Text, HStack, Input } from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunNumberInput extends ReactGun {
  constructor(props) {
    super(props);

    this.state.test = false;
    this.inputRef = React.createRef();
  }

  render() {
    if (this.state.gunData == null) return null;
    return (
      <HStack w="100%" px={2} spacing={0.5}>
        <Text>{this.props.title}</Text>
        <Input
        size="xs"
          {...(document.activeElement === this.inputRef.current
            ? {}
            : { value: this.state.gunData[this.props.gunProperty] })}
          step={0.2}
          ref={this.inputRef}
          textAlign="right"
          onFocus={() => this.setState({ test: !this.state.test })}
          onChange={(e) => {
            console.log(e.target.value);
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
