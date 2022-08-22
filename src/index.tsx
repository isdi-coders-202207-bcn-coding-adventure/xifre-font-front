import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/roboto";
import { store } from "./store/store";
import App from "./App";
import "@fontsource/rajdhani";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
