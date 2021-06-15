import { Box } from "@chakra-ui/react";

import Header from "../components/Header";
import Card from "../components/Card";
import Main from "../components/Main.layout";

import thoughts from "../data/thoughts";

Thoughts.title = "Thoughts";
export default function Thoughts() {
  return (
    <>
      <Box maxW="900px" mx="auto" px="4" pt={{ base: "2", md: "16" }}>
        <Header activeLink="thoughts" />
        <Main>
          {thoughts.map((item) => (
            <Card {...item} />
          ))}
        </Main>
      </Box>
    </>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
