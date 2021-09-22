import React from "react";
import { Input } from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunInput extends ReactGun {
  constructor(props) {
    super(props);

    this.state.test = false;
    this.inputRef = React.createRef();
  }

  render() {
    if (this.state.gunData == null) return null;
    return (
      <Input
        ref={this.inputRef}
        onFocus={() => this.setState({ test: !this.state.test })}
        onChange={(e) => this.props.gun.get(this.props.gunProperty).put(e.target.value)}
        {...this.props}
        value={
          document.activeElement === this.inputRef.current
            ? null
            : this.state.gunData[this.props.gunProperty]
        }
      />
    );
  }
}

export default GunInput;
