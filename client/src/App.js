import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Pages from "./pages";
import "./App.css";
import pokeball from "./images/pokeball.png";

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
        <Navbar fixed="top">
          <Container>
            <Navbar.Brand href="/" alt="">
              <img style={styles.pokeball} src={pokeball} alt="pokeball" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
