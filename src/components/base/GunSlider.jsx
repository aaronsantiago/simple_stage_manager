import React from "react";
import {
  Text,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import ReactGun from "./ReactGun";

class GunSlider extends ReactGun {
  constructor(props) {
    super(props);

    this.state.test = false;
    this.inputRef = React.createRef();
  }

  render() {
    if (this.state.gunData == null) return null;
    return (
      <HStack px={2}>
        <Text w="100%">{this.props.title}</Text>
        <Slider
          min={0}
          max={1}
          step={0.01}
          {...(document.activeElement === this.inputRef.current
            ? {}
            : { value: this.state.gunData[this.props.gunProperty] })}
          onChange={(e) => {
            this.props.gun
              .get(this.props.gunProperty)
              .put(parseFloat(e));
          }}
        >
          <SliderTrack>
            <SliderFilledTrack
              onFocus={() => this.setState({ test: !this.state.test })}
              onClick={() => this.setState({ test: !this.state.test })}
              ref={this.inputRef}
            />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </HStack>
    );
  }
}

export default GunSlider;
