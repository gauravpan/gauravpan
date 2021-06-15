import { Heading, Stack } from "@chakra-ui/react";
import { Nav } from "../components/Header";

export default function Layout({ children }) {
  return (
    <Stack
      as="main"
      fontSize="large"
      spacing="1rem"
      py="2rem"
      maxW={{ base: "full", sm: "600px" }}
      color="gray.600"
    >
      {children}
      <Nav justifyContent="center" />
    </Stack>
  );
}
