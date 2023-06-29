import React from "react"
import App from './App';
import ReactDOM from "react-dom";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import {ColorModeScript} from "@chakra-ui/color-mode";
import {ChakraProvider} from "@chakra-ui/react"


ReactDOM.render(
<React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"));
