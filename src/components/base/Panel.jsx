import React from "react";
import { Box, Heading, CloseButton, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'


function Panel(props) {
  return (
    <Box
      position="relative"
      {...props}
      shadow="md"
      borderWidth="1px"
      height="100%"
    >
      {props.onClose == null ? null : (
        <CloseButton
          position="absolute"
          top="0"
          right="0"
          onClick={props.onClose}
        />
      )}
      {props.onMoveUp == null ? null : (
        <IconButton
          variant="unstyled"
          position="absolute"
          top="0"
          right="7"
          size="sm"
          onClick={props.onMoveUp}
          icon={<ChevronUpIcon />} 
        />
      )}
      {props.onMoveDown == null ? null : (
        <IconButton
          position="absolute"
          top="0"
          variant="unstyled"
          size="sm"
          right="14"
          onClick={props.onMoveDown}
          icon={<ChevronDownIcon />} 
        />
      )}
      <Heading p={2} as="h5" size="xs">
        {props.heading}
      </Heading>
      {props.children}
    </Box>
  );
}

export default Panel;
