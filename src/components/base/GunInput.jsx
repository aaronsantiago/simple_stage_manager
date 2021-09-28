import React from "react";
import { Input } from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunInput extends ReactGun {
  constructor(props) {
    super(props, props.sync == undefined ? true : props.sync);
    console.log("recreated");
    this.state.focusToggle = false;
    this.inputRef = React.createRef();
    this.state.inputCache = "";
  }

  currentlyFocused() {
    return document.activeElement === this.inputRef.current;
  }

  componentDidUpdate() {
    // if (this.currentlyFocused())
    //   this.inputRef.current.selectionStart = this.inputRef.current.selectionEnd =
    //     this.cursor;
  }

  render() {
    if (this.state.gunData == null && this.props.value == null) return null;
    let value = this.props.value;
    if (value == null) value = this.state.gunData[this.props.gunProperty];
    return (
      <Input
        textOverflow="ellipsis"
        ref={this.inputRef}
        onFocus={() =>
          this.setState({
            focusToggle: !this.state.focusToggle,
          })
        }
        onBlur={(e) => {
          this.props.gun.get(this.props.gunProperty).put(e.target.value);
        }}
        {...this.props}
        value={this.currentlyFocused() ? null : value}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            event.target.blur();
          }
        }}
      />
    );
  }
}

export default GunInput;
