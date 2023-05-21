"use client";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import "bootstrap/dist/css/bootstrap.css";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />;
        </ChakraProvider>
      </Provider>
    );
  }
}
