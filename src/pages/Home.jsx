import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  Input,
  Button
} from "@chakra-ui/react";
import Panel from "../components/base/Panel";
import { useRef } from "react";
import { shortUuid, uuidv4 } from "../utils/utils";
import { useHistory } from "react-router";

function Home(props) {
  const instanceInput = useRef(null);  
  const urlInput = useRef(null);  
  const history = useHistory();

  const goToManagerScreen = () => {
    let instance = instanceInput.current.value;
    let url = urlInput.current.value;
    if (instance == "") {
      instance = shortUuid();
    }
    if (url != "") {
      props.gun.get(instance).put({url});
    }
    history.push("/manager/" + instance);
  }
  return (
    <>
      <Box minW="100vw" minH="100vh" bg="#D0C5D0">
        <Center width="100vw" height="100vh">
          <Box w="300px" minH="300px" bg="gray.100" position="relative">
            <Panel heading="simple stage manager">
              <VStack p="5" pb="2">
                <Box>
                  <Text mb="3">
                    Enter an instance ID below, or leave it blank to generate a
                    random one.
                  </Text>
                  <Input ref={instanceInput} placeholder="Instance ID"></Input>
                </Box>
                <Box>
                  <Text my="3">
                    Enter the base URL for the experience below. You can also
                    set this later in the top right corner of the Manager
                    screen.
                  </Text>
                  <Input mb="3" ref={urlInput} placeholder="Base URL"></Input>
                </Box>
                <Text >Remember to copy the viewer URL and send it to your audience!</Text>
              </VStack>
              <Box h="10">
                <Button
                  position="absolute"
                  bottom="0"
                  variant="outline"
                  w="100%"
                  borderRadius="0"
                  onClick={goToManagerScreen}
                  mt="10"
                  bg="white"
                >
                  Let's get started!
                </Button>
              </Box>
            </Panel>
          </Box>
        </Center>
      </Box>
    </>
  );
}

export default Home;
