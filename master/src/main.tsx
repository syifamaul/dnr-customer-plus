import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header.tsx";
import Promotion from "./components/Promotion.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Promotion />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode >,
);
