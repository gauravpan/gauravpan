import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const title = Component.title || "Gaurav Pandey";
  const meta =
    Component.meta ||
    "full stack javascript developer with 2+ years of experience";
  return (
    <ChakraProvider resetCSS={false}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
