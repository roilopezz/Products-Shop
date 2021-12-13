import { NavLink } from "react-router-dom";
// import { Cart } from "../dashboard/dashboard";

const SideNav = () => {
  return (
    <nav
      className="bg-light col-xl-1 col-lg-2 col-md-2 col-1 min-vh-100  sideNav"
      style={{
        listStyleType: "none",
        color: "white",
      }}
    >
      <NavLink
        className="text-white mt-5"
        to="/"
        exact
        style={{ textDecoration: "none" }}
        title="Home"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        <i
          style={{ color: "black" }}
          className="bi bi-house me-md-2 me-lg-2 me-xl-2 me-1 symbols"
        ></i>
        <span
          style={{ color: "black" }}
          className="sideNav-title
        d-none d-sm-inline d-sm-none d-md-inline
        hideText780"
        >
          Home
        </span>
      </NavLink>
      <br />

      <NavLink
        activeStyle={{
          fontWeight: "bold",
        }}
        to="/cart"
        style={{ textDecoration: "none" }}
        title="cart"
      >
        <i
          style={{ color: "black" }}
          className="bi bi-cart2 me-md-2 me-lg-2 me-xl-2 me-1 symbols"
        ></i>

        <span
          style={{ color: "black" }}
          className="sideNav-title
        d-none d-sm-inline d-sm-none d-md-inline
        hideText780"
        >
          cart
        </span>
        {/* <span className="text-warning cartItems me-1">{cart.length}</span>
          <span>Cart</span> */}
      </NavLink>
    </nav>
  );
};

export default SideNav;
