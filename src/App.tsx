import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";
import { Start } from "./components/Start";
import { useQuizContext } from "./context/QuizContext";

function App() {
  const { isStart, isGame } = useQuizContext();

  return (
    <Box mx="100px">
      <Text mt="10" textAlign="center" fontSize="3rem" fontWeight="bold">
        Bojack Horseman quotes quiz
      </Text>
      {isStart ? <Start /> : isGame ? <Quiz /> : <Result />}
    </Box>
  );
}

export default App;
