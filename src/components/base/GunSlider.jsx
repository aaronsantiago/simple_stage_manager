import React from "react";
import {
  Text,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import ReactGun from "./ReactGun";
import { throttle } from "lodash";

class GunSlider extends ReactGun {
  constructor(props) {
    super(props, props.sync == undefined ? true : props.sync);

    this.state.test = false;
    this.sliderRef = React.createRef();
    this.throttledGunUpdate = throttle((e) => {
      this.props.gun.get(this.props.gunProperty).put(parseFloat(e));
    }, 50);
  }

  render() {
    if (this.state.gunData == null && this.props.value == null) return null;
    let value = this.props.value;
    if (value == null) value = this.state.gunData[this.props.gunProperty];
    return (
      <VStack px={2} w="100%">
        <Text w="100%">{this.props.title}</Text>
        <Slider
          ref={this.sliderRef}
          min={0}
          max={1}
          step={0.01}
          value={value}
          focusThumbOnChange={false}
          onChange={(e) => {
            this.sliderRef.current.value = e;
            this.throttledGunUpdate(e);
          }}
        >
          <SliderTrack bg="gray.500">
            <SliderFilledTrack/>
          </SliderTrack>
          <SliderThumb bg="gray.400" />
        </Slider>
      </VStack>
    );
  }
}

export default GunSlider;
