import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.jsx";
import { Page1 } from "./Page1.jsx";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="*" element={<h1>404: ページが見つかりません </h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
