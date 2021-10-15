import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes/Routes";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
