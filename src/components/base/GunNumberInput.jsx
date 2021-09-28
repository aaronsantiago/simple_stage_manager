import React from "react";
import { Text, HStack, Input } from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunNumberInput extends ReactGun {
  constructor(props) {
    super(props, props.sync == undefined ? true : props.sync);

    this.state.focusToggle = false;
    this.inputRef = React.createRef();
    this.state.inputCache = "";
  }

  currentlyFocused() {
    return document.activeElement === this.inputRef.current;
  }

  componentDidUpdate() {
    if (this.currentlyFocused())
      this.inputRef.current.selectionStart =
        this.inputRef.current.selectionEnd = this.cursor;
  }

  render() {
    if (this.state.gunData == null && this.props.value == null) return null;
    let value = this.props.value;
    if (value == null) value = this.state.gunData[this.props.gunProperty];
    return (
      <HStack w="100%" px={2} spacing={0.5}>
        <Text>{this.props.title}</Text>
        <Input
          size="xs"
          value={
            document.activeElement === this.inputRef.current ? null : value
          }
          step={0.2}
          ref={this.inputRef}
          textAlign="right"
          onFocus={() =>
            this.setState({
              focusToggle: !this.state.focusToggle,
            })
          }
          onBlur={(e) => {
            if (!isNaN(parseFloat(e.target.value)))
              this.props.gun
                .get(this.props.gunProperty)
                .put(parseFloat(e.target.value));
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              event.target.blur();
            }
          }}
        ></Input>
      </HStack>
    );
  }
}

export default GunNumberInput;
