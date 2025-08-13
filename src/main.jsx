import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#38BDF8", //light gray
        accent: "#2C2C2C", //#1A1A1A,
        text: "#1F2937", // #EAEAEA
        background: "#FFFFFF",
        border: "#333333",
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
