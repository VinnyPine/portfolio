import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fonts from "./styles/Fonts";
import GlobalStyles from "./styles/GlobalStyles";
import ApiProvider from "./contexts/ApiContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Fonts />
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
