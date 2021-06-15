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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑</text></svg>"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
