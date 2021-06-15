import { Box, Heading } from "@chakra-ui/react";

import Wrapper from "../components/Thought.layout";
import { getThoughtBySlug } from "../lib/get-thoughts";

// import remark from "remark";
// import html from "remark-html";
// import prism from "remark-prism";
import ReactMarkdown from "react-markdown";

export default function Home({ markdown }) {
  console.log({ markdown });

  return (
    <>
      <Box maxW="900px" mx="auto" px="2" pt={{ base: "8", md: "16" }}>
        <Heading size="lg"> This is heading </Heading>

        <Wrapper>
          <ReactMarkdown>{markdown.content}</ReactMarkdown>
          <hr />
        </Wrapper>
      </Box>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  let markdown = await getThoughtBySlug(slug);

  if (!markdown)
    return {
      notFound: true,
    };

  return {
    props: { markdown },
  };
}

export async function getStaticPaths() {
  return { paths: ["/test"], fallback: false };
}

export const config = {
  unstable_runtimeJS: false,
};
