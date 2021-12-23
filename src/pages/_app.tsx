import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../layouts/DefaultLayout";
import Nav from "../components/Nav";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Nav></Nav>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
