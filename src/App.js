// react
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// custom
import Navbar from "./components/Navbar";
import General from "./components/General";
import More from "./components/More";
import Bussiness from "./components/Bussiness";
import Technology from "./components/Technology";
import Sports from "./components/Sports";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={General} />
          <Route exact path="/more/" component={More} />
          <Route exact path="/bussiness/" component={Bussiness} />
          <Route exact path="/technology/" component={Technology} />
          <Route exact path="/sports/" component={Sports} />
        </Switch>
      </Fragment>
    );
  }
}
