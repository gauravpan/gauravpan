import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Wrapper from "../components/Thought.layout";
import { getAllThoughtSlugs, getThoughtBySlug } from "../lib/get-thoughts";

// import remark from "remark";
// import html from "remark-html";
// import prism from "remark-prism";
import ReactMarkdown from "react-markdown";
import { metaProperty } from "@babel/types";

export default function Home({ markdown }) {
  console.log({ markdown });

  return (
    <>
      <Head>
        <title>{`${markdown?.meta?.title} | Gaurav Pandey`}</title>
      </Head>
      <Box maxW="900px" mx="auto" px="1rem" pt={{ base: "2rem", md: "4rem" }}>
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
  let thoughts = await getAllThoughtSlugs();
  let thoughtsPage = thoughts.map((thought) => `/${thought}`);
  console.log({ thoughtsPage });

  return { paths: thoughtsPage || [], fallback: false };
}

export const config = {
  unstable_runtimeJS: false,
};
