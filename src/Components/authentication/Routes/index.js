import React from "react";

import { Route, Switch } from "react-router-dom";
import Slider from "../../Slider Progress Bar";
import Home from '../../Home'
import Beats from '../../Beat Buttons'

export default function Routes() {
  return (
    <>
      <Switch>
      
        <Route exact path="/slider" component={Slider} />
        <Route exact path="/beat" component={Beats} />
      </Switch>
    </>
  );
}
