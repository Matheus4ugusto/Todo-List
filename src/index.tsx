import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import "./styles/reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
