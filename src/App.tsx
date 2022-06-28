import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import bojack from "./public/bojack.png";
import princesscarolyn from "./public/princesscarolyn.png";
import mrpeanutbutter from "./public/mrpeanutbutter.png";
import diane from "./public/diane.png";
import todd from "./public/todd.png";

function App() {
  return (
    <Box mx="100px">
      <Flex justifyContent="space-around" my="40px" p="5" boxShadow="base" borderRadius="50">
        <Text fontSize="1.5rem" fontWeight="semibold">
          Question: 3/10
        </Text>
        <Text fontSize="1.5rem" fontWeight="semibold">
          Score: 2
        </Text>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <GridItem w="100%" px="5" py="10" boxShadow="base" borderRadius="20" display="flex" flexDir="column">
          <Text pb="5" textAlign="center" fontSize="1.3rem" fontWeight="semibold">
            Quote:
          </Text>
          <Text fontSize="1.5rem" fontWeight="bold" m="auto">
            "Cos tam cos tam"
          </Text>
        </GridItem>
        <GridItem w="100%" boxShadow="base" borderRadius="20" px="5" py="10">
          <Text pb="5" textAlign="center" fontSize="1.3rem" fontWeight="semibold">
            Who said that?
          </Text>
          <Box mx="5">
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              <GridItem w="100%">
                <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={bojack} />
              </GridItem>
              <GridItem w="100%">
                <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={todd} />
              </GridItem>
              <GridItem w="100%">
                <Image
                  w="210px"
                  h="180px"
                  m="auto"
                  borderRadius="40"
                  _hover={{ boxShadow: "xl" }}
                  src={princesscarolyn}
                />
              </GridItem>
              <GridItem mt="10" w="100%">
                <Image w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }} src={diane} />
              </GridItem>
              <GridItem mt="10" w="100%">
                <Image
                  w="210px"
                  h="180px"
                  m="auto"
                  borderRadius="40"
                  _hover={{ boxShadow: "xl" }}
                  src={mrpeanutbutter}
                />
              </GridItem>
              <GridItem mt="10" w="100%">
                <Button w="210px" h="180px" m="auto" borderRadius="40" _hover={{ boxShadow: "xl" }}>
                  None of them
                </Button>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
