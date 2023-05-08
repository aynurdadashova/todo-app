import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoContext } from "context";
import { ThemeContext } from "context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContext>
    <ThemeContext>
      <App />
    </ThemeContext>
  </TodoContext>
);
