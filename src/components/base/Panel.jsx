import React from "react";
import { Box, Heading, CloseButton } from "@chakra-ui/react";

function Panel(props) {
  return (
    <Box position="relative" {...props} shadow="md" borderWidth="1px" height="100%">
      <CloseButton position="absolute" top="0" right="0" onClick={props.onClose}/>
      <Heading p={2} as="h5" size="xs">
        {props.heading}
      </Heading>
      {props.children}
    </Box>
  );
}

export default Panel;
