import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import bojack from "../public/bojack.png";
import princesscarolyn from "../public/princesscarolyn.png";
import mrpeanutbutter from "../public/mrpeanutbutter.png";
import diane from "../public/diane.png";
import todd from "../public/todd.png";

export const Quiz = () => {
  return (
    <Box>
      <Flex justifyContent="center" my="40px">
        <Text fontSize="1.5rem" fontWeight="semibold">
          Question: 3/10
        </Text>
      </Flex>
      <Flex flexDir="column">
        <Flex w="100%" minH="300px">
          <Text fontSize="1.5rem" fontWeight="bold" m="auto">
            "Quote blah blah blah"
          </Text>
        </Flex>
        <Box mt="10">
          <Text pb="5" textAlign="center" fontSize="1.3rem" fontWeight="semibold">
            Who said that?
          </Text>
          <Flex flexDir="row" mx="5">
            <Box w="100%" m="auto">
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={bojack} />
            </Box>
            <Box w="100%" m="auto">
              <Image
                w="210px"
                h="180px"
                m="auto"
                borderRadius="40"
                _hover={{ boxShadow: "xl" }}
                src={princesscarolyn}
              />
            </Box>
            <Box w="100%" m="auto">
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={todd} />
            </Box>
            <Box w="100%" m="auto">
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={diane} />
            </Box>
            <Box w="100%" m="auto">
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={mrpeanutbutter} />
            </Box>
            <Box w="100%" m="auto">
              <Flex w="210px" h="180px" bg="gray.200" borderRadius="40" _hover={{ boxShadow: "xl" }} m="auto">
                <Text m="auto">None of them</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
