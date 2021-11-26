import { Box } from "@chakra-ui/react";

import Header from "../components/Header";
import Card from "../components/Card";
import Main from "../components/Main.layout";

import { getAllThoughts } from "../lib/get-thoughts";

Thoughts.title = "Thoughts";
export default function Thoughts({ thoughts }) {
  return (
    <>
      <Box maxW="900px" mx="auto" px="1rem" pt={{ base: "0.5rem", md: "4rem" }}>
        <Header activeLink="thoughts" />
        <Main>
          {thoughts.map((item) => (
            <Card {...item} key={item.title} />
          ))}
        </Main>
      </Box>
    </>
  );
}

export async function getStaticProps({ params }) {
  let allThoughts = await getAllThoughts();
  let thoughts = allThoughts.map(({ slug, meta }) => ({
    slug,
    title: meta.title,
    excerpt: meta.excerpt,
  }));
  return {
    props: { thoughts },
  };
}

// export const config = {
//   unstable_runtimeJS: false,
// };
