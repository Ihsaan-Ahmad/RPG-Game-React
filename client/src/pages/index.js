import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home.js";
import Login from "../components/Login/Login.js";
import Signup from "../components/Signup/Signup.js";
import Navbar from "../components/Navbar/Navbar.js";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />;
      <Route path="/signup" exact component={Signup} />;
    </Switch>
  );
}
