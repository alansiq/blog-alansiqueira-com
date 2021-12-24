import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../layouts/DefaultLayout";
import Nav from "../components/Nav";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { Router } from "next/router";
import Footer from "../components/Footer";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c32319",
    },
    secondary: {
      main: "#19b0c3",
    },
    background: {
      default: "#161822",
      paper: "#232631",
    },
  },
});

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Nav></Nav>
        <Component {...pageProps} />
        <Footer></Footer>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
