import { Box, Text, Link } from "@chakra-ui/react";

import Main from "../components/Main.layout";
import Header from "../components/Header";

const fav = [
  { name: "next.js", href: "https://nextjs.org/" },
  { name: "node.js", href: "https://nodejs.org/en/" },
  { name: "mongoDB", href: "https://www.mongodb.com/" },
];
const tech = [
  { name: "GraphQL", href: "https://graphql.org/" },
  { name: "React Native", href: "https://reactnative.dev/" },
  { name: "Zustand", href: "https://github.com/pmndrs/zustand" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/" },

  { name: "Chakra", href: "https://chakra-ui.com/" },
];
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
          {/* <Text>Currently, I work at Enspire Tech. </Text> */}
          <Text>
            I have mostly worked with{" "}
            {fav.map((item, index) => (
              <DisplayInlineList
                {...item}
                array={fav}
                index={index}
                key={item.name}
              />
            ))}
            {" ."}
            <br /> Besides these technologies, I really love{" "}
            {tech.map((item, index) => (
              <DisplayInlineList
                {...item}
                array={tech}
                index={index}
                key={item.name}
              />
            ))}
            .
          </Text>
          <Text>I believe in simplicity.</Text>
        </Main>
      </Box>
    </>
  );
}

function DisplayInlineList({ name, href, array, index }) {
  return (
    <>
      <Link fontWeight="medium" href={href}>
        {name}
      </Link>
      {index + 2 === array.length
        ? " and "
        : index + 1 === array.length
        ? ""
        : ", "}
    </>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
