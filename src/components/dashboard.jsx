import { toast } from "react-toastify";
import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";
import PageNotFound from "./pageNotFound/pageNotFound";
import Nav from "./nav/nav";
import Profile from "./profile/profile";
import Shop from "./shop/shop";
import Cart from "./shop/cart";
import Login from "./login/login";
import Register from "./register/register";
import { contextUser } from "../services/userContext";
const Dashboard = () => {
  const userContext = useContext(contextUser);

  const { user } = userContext;

  console.log(user.length);

  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/profile" component={Profile} /> */}

        {/* <Route path="/p" element={Contact} /> */}
        {user.length ? (
          <>
            <Route path="/profile" component={Profile} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </>
        ) : null}

        <Route path="*" component={PageNotFound} />
      </Switch>
      {/* <Profile /> */}
    </div>
  );
};

export default Dashboard;
