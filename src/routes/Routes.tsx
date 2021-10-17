import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { Itinerary } from "../pages/Itinerary";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={"/home"} exact component={HomePage} />
      <Route path={"/itinerary/:lineId"} exact component={Itinerary} />
      <Route path={"*"} exact component={() => <Redirect to="/home" />} />
    </Switch>
  );
};
