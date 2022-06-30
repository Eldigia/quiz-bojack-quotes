import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";
import { Start } from "./components/Start";
import { useQuizContext } from "./context/QuizContext";

function App() {
  const { isStarted, isFinished } = useQuizContext();

  return (
    <Box mx="100px">
      <Text mt="10" textAlign="center" fontSize="3rem" fontWeight="bold">
        Bojack Horseman quotes quiz
      </Text>

      {isFinished ? <Result /> : isStarted ? <Quiz /> : <Start />}
    </Box>
  );
}

export default App;
