import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import theme from "./theme";
import {ColorModeScript} from "@chakra-ui/color-mode";
import {ChakraProvider} from "@chakra-ui/react"


ReactDOM.render(
<React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"));
