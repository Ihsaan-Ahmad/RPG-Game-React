import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
import Pages from "./pages";
// import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import pokeball from "./components/images/pokeball.png";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// import PrivateRoute from "./components/private-route/PrivateRoute.js";
// import Dashboard from "./components/dashboard/Dashboard.js";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const styles = {
  pokeball: {
    height: "100px",
    width: "100px"
  }
};

function App(props) {
  return (
    <div className="App container">
      <Provider store={store}>
        <Router>
          <div className="Home">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top mb-5 shadow fixed-top">
              <div className="container">
                <a className="navbar-brand" href="/">
                  <img style={styles.pokeball} src={pokeball} alt="pokeball" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signup">
                        Signup
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                    {localStorage.jwtToken && (
                      <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                          Dashboard
                        </a>
                      </li>
                    )}
                    {localStorage.jwtToken && (
                      <li className="nav-item">
                        <a className="nav-link" href="/pokedex">
                          Pokedex
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <Pages />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
