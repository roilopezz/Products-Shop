import React, { Component } from "react";
import { Route } from "react-router-dom";

import Products from "./products";

class MainContainer extends Component {
  state = {};
  render() {
    return <Route path="/products" component={Products} />;
  }
}

export default MainContainer;
