import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes/Routes";
import { ThemesProvider } from "./shared/context/Theme";

export const App: React.FC = () => {
  return (
    <ThemesProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemesProvider>
  );
};
