import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
