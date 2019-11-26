import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
import Pages from "./pages";
// import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import pokeball from "./components/images/pokeball.png";

const styles = {
  pokeball: {
    height: "100px",
    width: "100px"
  }
};

function App(props) {
  return (
    <div className="App container">
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
    </div>
  );
}

export default App;
