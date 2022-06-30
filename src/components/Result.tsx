import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useQuizContext } from "../context/QuizContext";

export const Result = () => {
  const { answers, startQuizGame } = useQuizContext();

  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column" mt="40">
      <Text my="10" fontSize="1.5rem" fontWeight="semibold">
        Your score:
      </Text>
      <Text my="10" fontSize="2rem" fontWeight="semibold">
        {answers?.reduce(function (a, b) {
          return a + b;
        })}
        /10
      </Text>
      <Button bg="#f8961e" h="80px" w="150px" mt="10" onClick={startQuizGame}>
        Try again!
      </Button>
    </Flex>
  );
};
