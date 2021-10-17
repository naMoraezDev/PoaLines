import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LineList } from "../pages/line-list/LineList";
import { Itinerary } from "../pages/itinerary/Itinerary";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={"/home"} exact component={LineList} />
      <Route path={"/itinerary/:lineId"} exact component={Itinerary} />
      <Route path={"*"} exact component={() => <Redirect to="/home" />} />
    </Switch>
  );
};
