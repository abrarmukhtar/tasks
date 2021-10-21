import React from "react";
import { Route, Switch } from "react-router-dom";
import Slider from "../../Slider Progress Bar";
import Beats from "../../Beat Buttons";
import Facebook from '../../Facebook'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Facebook} />
        {/* <Route exact path="/slider" component={Slider} /> */}
        <Route exact path="/slider" component={Slider} />
      </Switch>
    </>
  );
}
