import React from "react"
import {createRoot} from "react-dom/client";
import App from './App';
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import {ColorModeScript} from "@chakra-ui/color-mode";
import {ChakraProvider} from "@chakra-ui/react"


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
