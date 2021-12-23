import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../layouts/DefaultLayout";
import Nav from "../components/Nav";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, useTheme } from "@mui/system";
import { createTheme } from "@mui/material/styles";
export const dark = createTheme({
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

export const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c32319",
      contrastText: "#161822",
    },
    secondary: {
      main: "#19b0c3",
    },
    background: {
      default: "#eeeeee",
      paper: "#ffffff",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme(light);

  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <Nav></Nav>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

//@ts-ignore
// export function ToggleColorMode(props) {
//   const [mode, setMode] = useState(light);
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
