import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const title = Component.title || "Gaurav Pandey";
  const meta =
    Component.meta ||
    "full stack javascript developer with 2+ years of experience";
  return (
    <ChakraProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
