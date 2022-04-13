import Nav from "react-bootstrap/Nav";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextUser } from "../../services/userContext";
import { contextShop } from "../../services/shopContext";
import "./nav.css";

const NavBar = () => {
  const userContext = useContext(contextUser);
  const shopContext = useContext(contextShop);

  const { user, logout } = userContext;
  const { cart, userLogout } = shopContext;

  return (
    <>
      <Nav
        className="justify-content-center fixed-top bg-dark"
        activeKey="/home"
      >
        <Link className="tabs" to="/">
          Home
        </Link>

        <Link className="tabs" to="/about">
          about
        </Link>

        <Link className="tabs" to="/contact">
          Contact
        </Link>

  
        <Link className="tabs" to="/cart">
          <i className="bi bi-cart-fill"></i>
          <span
            style={{
              position: "relative",
              bottom: "13px",
              right: "2px",
              color: "gold",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {cart.length}
          </span>
        </Link>

        {!user.length ? (
          <>
            <Link className="tabs" to="/register">
              Register
            </Link>
            <Link className="tabs" to="/login">
              Login
            </Link>
          </>
        ) : (
          <>
            {user.map((u) => {
              return (
                <Link key={u} to="/profile" className="tabs">
                  <i className="bi bi-person-circle">
                    <span className="ms-2">{u.email}</span>
                  </i>
                </Link>
              );
            })}

            <Link
              className="tabs"
              to="/"
              onClick={() => logout() + userLogout()}
            >
              Logout
            </Link>
          </>
        )}
      </Nav>
    </>
  );
};

export default NavBar;
