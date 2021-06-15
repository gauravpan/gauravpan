import { Box } from "@chakra-ui/react";

import Header from "../components/Header";
import Card from "../components/Card";
import Main from "../components/Main.layout";

import projects from "../data/projects";

Projects.title = "Projects";
export default function Projects() {
  return (
    <>
      <Box maxW="900px" mx="auto" px="4" pt={{ base: "2", md: "16" }}>
        <Header activeLink="projects" />
        <Main>
          {projects.map((item) => (
            <Card {...item} isProject={true} />
          ))}
        </Main>
      </Box>
    </>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
