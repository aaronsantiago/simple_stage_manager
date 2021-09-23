import React from "react";
import { Input } from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunInput extends ReactGun {
  constructor(props) {
    super(props);

    this.state.test = false;
    this.inputRef = React.createRef();
    this.state.inputCache = "";
  }

  currentlyFocused() {
    return document.activeElement === this.inputRef.current;
  }

  componentDidUpdate() {
    
    if (this.currentlyFocused())
      this.inputRef.current.selectionStart = this.inputRef.current.selectionEnd =
        this.cursor;
  }

  render() {
    if (this.state.gunData == null) return null;
    return (
      <Input
        textOverflow="ellipsis"
        ref={this.inputRef}
        onFocus={() =>
          this.setState({
            test: !this.state.test,
            inputCache: this.state.gunData[this.props.gunProperty],
          })
        }
        onChange={(e) => {
          this.cursor = e.target.selectionStart;
          this.state.inputCache = e.target.value;
          this.props.gun.get(this.props.gunProperty).put(e.target.value);
        }}
        {...this.props}
        value={
          this.currentlyFocused()
            ? this.state.inputCache
            : this.state.gunData[this.props.gunProperty]
        }
      />
    );
  }
}

export default GunInput;
