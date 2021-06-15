import { Box, Text } from "@chakra-ui/react";

import Main from "../components/Main.layout";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Box maxW="900px" mx="auto" px="1rem" pt={{ base: "0.5rem", md: "4rem" }}>
        <Header activeLink="about" />
        <Main>
          <Text>
            I'm{" "}
            <Text as="span" fontWeight="medium">
              Gaurav Pandey
            </Text>
            , a full stack javascript developer with 2+ years of experience.
          </Text>
          <Text>Currently, I work at Enspire Tech. </Text>
          <Text>
            I have used{" "}
            <Text as="span" fontWeight="medium">
              react.js{" "}
            </Text>
            and{" "}
            <Text as="span" fontWeight="medium">
              node.js
            </Text>{" "}
            in every projects. Besides these technologies, I really love
            GraphQL, Zustand and Chakra.
          </Text>
        </Main>
      </Box>
    </>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
