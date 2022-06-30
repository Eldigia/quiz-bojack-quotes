import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import bojack from "../public/bojack.png";
import princesscarolyn from "../public/princesscarolyn.png";
import mrpeanutbutter from "../public/mrpeanutbutter.png";
import diane from "../public/diane.png";
import todd from "../public/todd.png";
import { useQuizContext } from "../context/QuizContext";

export const Quiz = () => {
  const { questions, currentStep, nextQuestion } = useQuizContext();

  return (
    <Box>
      <Flex justifyContent="center" my="40px">
        <Text fontSize="1.5rem" fontWeight="semibold">
          Question: {currentStep}/10
        </Text>
      </Flex>
      <Flex flexDir="column">
        <Flex w="100%" minH="300px" justifyItems="center">
          <Text fontSize="2rem" fontWeight="bold" m="auto" textAlign="center">
            {questions[currentStep].quote}
          </Text>
        </Flex>
        <Box mt="10">
          <Text pb="5" textAlign="center" fontSize="1.3rem" fontWeight="semibold">
            Who said that?
          </Text>
          <Flex flexDir="row" mx="5">
            <Box w="100%" m="auto" onClick={() => nextQuestion("BoJack")}>
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={bojack} />
            </Box>
            <Box w="100%" m="auto" onClick={() => nextQuestion("Princess Carolyn")}>
              <Image
                w="210px"
                h="180px"
                m="auto"
                borderRadius="40"
                _hover={{ boxShadow: "xl" }}
                src={princesscarolyn}
              />
            </Box>
            <Box w="100%" m="auto" onClick={() => nextQuestion("Todd")}>
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={todd} />
            </Box>
            <Box w="100%" m="auto" onClick={() => nextQuestion("Diane")}>
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={diane} />
            </Box>
            <Box w="100%" m="auto" onClick={() => nextQuestion("Mr. Peanutbutter")}>
              <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={mrpeanutbutter} />
            </Box>
            <Box w="100%" m="auto" onClick={() => nextQuestion("Other")}>
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
