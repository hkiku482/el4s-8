import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppStateProvider } from "./components/features/AppStateContext/AppStateContext.tsx";

import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppStateProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </AppStateProvider>
  </React.StrictMode>
);
