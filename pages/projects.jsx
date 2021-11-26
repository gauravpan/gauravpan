import { Box } from "@chakra-ui/react";

import Header from "../components/Header";
import Card from "../components/Card";
import Main from "../components/Main.layout";

import projects from "../data/projects";

Projects.title = "Projects";
export default function Projects() {
  return (
    <>
      <Box maxW="900px" mx="auto" px="1rem" pt={{ base: "0.5rem", md: "4rem" }}>
        <Header activeLink="projects" />
        <Main>
          {projects.map((item) => (
            <Card {...item} isProject={true} key={item.title} />
          ))}
        </Main>
      </Box>
    </>
  );
}
// export const config = {
//   unstable_runtimeJS: false,
// };
