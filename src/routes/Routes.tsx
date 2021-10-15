import React from "react";
import { Switch, Route } from "react-router-dom";
import { PaginaInicial } from "./pages/PaginaInicial";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={"*"} exact component={PaginaInicial} />
    </Switch>
  );
};
