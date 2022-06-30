import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useQuizContext } from "../context/QuizContext";

export const Start = () => {
  const { useIsStart } = useQuizContext();

  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column" mt="40">
      <Text my="10" fontSize="1.5rem" fontWeight="semibold">
        Do you remember who said it on the show? Let's check it out!
      </Text>
      <Button
        bg="#f8961e"
        h="80px"
        w="150px"
        mt="10"
        _hover={{ boxShadow: "lg", bg: "#f8961e", opacity: "0.8" }}
        _active={{ boxShadow: "lg", bg: "#f8961e", opacity: "0.8" }}
        onClick={() => useIsStart(false)}
      >
        Start !
      </Button>
    </Flex>
  );
};
