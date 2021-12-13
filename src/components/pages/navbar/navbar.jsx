import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CartContexts } from "../../../contexts/contexCart";
// import Cart from "../../main/cart";

class NavBar extends Component {
  static contextType = CartContexts;
  state = {};
  render() {
    const { cart } = this.context;
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink
            className="text-white navbar-brand"
            exact
            to="/"
            style={{ textDecoration: "none" }}
          >
            Products <i className="bi bi-bag"></i> Shop
          </NavLink>

          <NavLink
            className="cartNav"
            style={{ textDecoration: "none" }}
            to="/cart"
          >
            <i style={{ color: "white" }} className="bi bi-cart2 "></i>
            <span className="text-warning cartItems ">
              {Object.keys(cart).reduce(function (previous, key) {
                return previous + cart[key].amount;
              }, 0)}
            </span>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
