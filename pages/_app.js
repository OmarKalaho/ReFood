import * as React from "react";
import "../styles/globals.css";
import Layout from "../components/layoutComp/layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightGreen, deepOrange, grey } from "@mui/material/colors";
import { ColorModeContext, SignedInContext } from "../util/context";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState("light");
  const [signedIn, setSignedIn] = React.useState(true);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const signInContext = React.useMemo(
    () => ({
      signedIn: signedIn,
      signIn: () => {
        setSignedIn(!signedIn);
      },
    }),
    []
  );

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#689f38",
            },

            secondary: {
              main: "#fff",
            },
            divider: "#000",

            background: {
              default: "#fff",
              paper: "#fff",
            },
            text: {
              primary: "rgba(0,0,0,0.87)",
              secondary: "rgba(0,0,0,0.6)",
              disabled: "rgba(0,0,0,0.38)",
            },
          }
        : {
            primary: {
              main: "#556b2f",
            },

            secondary: {
              main: "#292929",
            },
            divider: "#000",

            background: {
              default: "#292929",
              paper: "#292929",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignedInContext.Provider value={signInContext}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SignedInContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
