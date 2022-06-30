import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Start = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column" mt="40">
      <Text my="10" fontSize="1.5rem" fontWeight="semibold">
        Do you remember who said it on the show? Let's check it out!
      </Text>
      <Button bg="#f8961e" h="80px" w="150px" mt="10">
        Start !
      </Button>
    </Flex>
  );
};
