import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BasePage from './pages/BasePage'

const BaseApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={ BasePage } />
      <Redirect to="/" />
    </Switch>
  );
};


export default BaseApp