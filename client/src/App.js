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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top mb-5 shadow">
              <div class="container">
                <a class="navbar-brand" href="/">
                  <img style={styles.pokeball} src={pokeball} alt="pokeball" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/signup">
                        Signup
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/login">
                        Login
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Contact
                      </a>
                    </li>
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
