import { Stack } from "@chakra-ui/react";

export default function Main({ children }) {
  return (
    <Stack
      as="main"
      fontSize="large"
      spacing="4"
      pt="8"
      maxW={{ base: "full", sm: "600px" }}
      color="gray.600"
    >
      {children}
    </Stack>
  );
}
