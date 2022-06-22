import { Box, Center, Stack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box
      backgroundImage={"url(spacebg.jpg)"}
      backgroundSize="cover"
      w="-webkit-fill-available"
      h="calc(100vh)"
    >
      <Center>
        <Stack>{children}</Stack>
      </Center>
    </Box>
  );
}
