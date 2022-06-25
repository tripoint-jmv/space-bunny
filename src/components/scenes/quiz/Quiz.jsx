import { Button, Heading, HStack, VStack } from "@chakra-ui/react";

export const Quiz = () => {
  return (
    <VStack zIndex={1} pos="absolute" mt="72" spacing={5} p={-60} mb={10}>
      <Heading size="4xl">5 + 5</Heading>
      <HStack spacing={5}>
        <Button bgColor={"white"} color={"green"} size={"lg"}>
          button1
        </Button>
        <Button bgColor={"white"} color={"green"} size={"lg"}>
          button2
        </Button>
        <Button bgColor={"white"} color={"green"} size={"lg"}>
          button3
        </Button>
        <Button bgColor={"white"} color={"green"} size={"lg"}>
          button4
        </Button>
      </HStack>
    </VStack>
  );
};
