import React from "react";
import { Route, Switch } from "react-router-dom";
import Slider from "../../Slider Progress Bar";
import Beats from "../../Beat Buttons";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Beats} />
        {/* <Route exact path="/slider" component={Slider} /> */}
        <Route exact path="/slider" component={Slider} />
      </Switch>
    </>
  );
}
