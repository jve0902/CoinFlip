import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MetaMaskProvider } from "metamask-react";
import { ThemeProvider } from "./context/themeContext";


ReactDOM.render(
  <>
    <React.StrictMode>
      <MetaMaskProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MetaMaskProvider>
    </React.StrictMode>

  </>,
  document.getElementById("root")
);
