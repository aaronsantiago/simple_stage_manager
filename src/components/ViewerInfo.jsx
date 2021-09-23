import React from "react";
import {
  Text,
  Box,
  createStandaloneToast,
  VStack,
  HStack,
  Input
} from "@chakra-ui/react";
import Panel from "../components/base/Panel";
import ReactGun from "./base/ReactGun";
import GunInput from "./base/GunInput";
import { chakraTheme } from "../utils/utils";

  // const toast = useToast({})
  // toast({
  //   title: "Account created.",
  //   description: "We've created your account for you.",
  //   status: "success",
  //   duration: 9000,
  //   isClosable: true,
  // });

class ViewerInfo extends ReactGun {

  componentDidMount() {
    super.componentDidMount();
    this.toast = createStandaloneToast({theme: chakraTheme});
  }
  render() {
    return (
      <Box bg="#FFF9" maxH="200px" w="100%" p="4">
        <Panel
          bg="#9F7AAFAA"
          borderColor="white"
          color="#FFFC"
          heading="viewer info: "
          w="100%"
          h="100%"
        >
          <VStack p="3" pt="0">
            <Box w="100%" 
                onClick={(e) => {
                  navigator.clipboard.writeText(
                    "https://aaron.work/ssm/v/" + this.props.roomId
                  );
                  this.toast({
                    title: "URL copied to clipboard",
                    description:
                      "Distribute this URL to users to have them join your experience.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top-right",
                  });
                  e.preventDefault();}}>
              <Text>Viewer URL:</Text>
              <Input
                display="inline-block"
                overflow="ellipsis"
                whiteSpace="nowrap"
                size="xs"
                bg="#0005"
                pointerEvents="none"
                value={"https://aaron.work/ssm/v/" + this.props.roomId}
              >
              </Input>
            </Box>
            <Box w="100%">
              <Text size="xs">Base URL</Text>
              <GunInput
                title="url"
                size="xs"
                gun={this.props.gun}
                gunProperty="url"
              />
            </Box>
          </VStack>
        </Panel>
      </Box>
    );
  }
}

export default ViewerInfo;