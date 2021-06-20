import { Box, Heading, Link } from "@chakra-ui/react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { atomDark as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Wrapper from "../components/Thought.layout";
import { getAllThoughtSlugs, getThoughtBySlug } from "../lib/get-thoughts";
import { readTime } from "../lib/get-readtime";

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        style={dark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  link({ className, children, ...props }) {
    return (
      <Link color="blue.500" className={className} {...props}>
        {children}
      </Link>
    );
  },
};

export default function Home({ markdown }) {
  return (
    <>
      <Head>
        <title>{`${markdown?.meta?.title} | Gaurav Pandey`}</title>
      </Head>
      <Box maxW="1000px" mx="auto" px="1rem" pt={{ base: "1rem", md: "2rem" }}>
        <Heading as="a" href="/thoughts" py="2">{`←`}</Heading>
        <Heading size="xs" py="2" color="gray.500" textTransform="uppercase">
          {readTime(markdown.content)} min read{" "}
        </Heading>
        <Heading size="lg"> {markdown?.meta?.title} </Heading>
        <Wrapper>
          <ReactMarkdown components={components}>
            {markdown.content}
          </ReactMarkdown>
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

  return { paths: thoughtsPage || [], fallback: false };
}
