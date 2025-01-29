import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TasksProviderWrapper } from "./context/task.context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <TasksProviderWrapper>
      <App />
    </TasksProviderWrapper>
  </BrowserRouter>
  // </StrictMode>
);
