import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./view/pages/home";

import { withRouter } from "react-router-dom";
import Product from "./view/pages/product";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/product" exact component={Product} />
        <Route path="/cart" exact component={Product} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
