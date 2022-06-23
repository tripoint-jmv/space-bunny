import { Box, Grid, Stack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box
      backgroundImage={"url(spacebg.jpg)"}
      backgroundSize="cover"
      w="-webkit-fill-available"
      h="calc(100vh)"
    >
      <Grid justifyContent="center">
        <Stack>{children}</Stack>
      </Grid>
    </Box>
  );
}
