import React from "react";
import { Box, Heading, Button, Input } from "@chakra-ui/react";
import GunInput from "../base/GunInput";
import { props } from "bluebird";

function Panel(props) {
  return (
    <Box {...props} shadow="md" borderWidth="1px">
      <Heading p={2} as="h5" size="xs">
        {props.heading}
      </Heading>
      {props.children}
    </Box>
  );
}

export default Panel;
