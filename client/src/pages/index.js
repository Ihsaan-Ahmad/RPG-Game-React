import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home.js";
import Login from "../components/Login/Login.js";
import Register from "../components/Register/Register.js";
import PrivateRoute from "../components/private-route/PrivateRoute.js";
import Dashboard from "../components/dashboard/Dashboard.js";
// import Navbar from "../components/Navbar/Navbar.js";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />;
      <Route path="/signup" exact component={Register} />;
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
