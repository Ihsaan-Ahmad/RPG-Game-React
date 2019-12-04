import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import "./Dashboard.css";
import "./Button.js";
import PokemonCard from "../pokemon/PokemonCard.js";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  //random Pokemon generator

  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: {},
    isCardVisible: false
  };

  async componentDidMount() {
    const number = Math.floor(Math.random() * 20);
    console.log(number);
    console.log(this.state.url);
    const baseQuery = this.state.url;
    const testQuery = baseQuery + number;
    console.log(testQuery);
    const res = await axios.get(testQuery);
    // console.log(res.data.species);
    this.setState({ pokemon: res.data.species });
  }

  randomPokemon = () => {
    console.log(this.state.pokemon);
    this.setState({ isCardVisible: true });
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are now logged into Ihsaan's{" "}
                <span style={{ fontFamily: "monospace" }}>Pokémon-App</span>
              </p>
            </h4>
          </div>
        </div>
        <div
          style={{
            background: "grey",
            opacity: "90%",
            padding: "30",
            textAlign: "center",
            padding: "10px"
          }}
        >
          <button onClick={this.randomPokemon}>Look For Random Pokemon</button>
        </div>
        <div id="randomPokemon">
          {this.state.isCardVisible ? (
            <PokemonCard
              key={this.state.pokemon.name}
              name={this.state.pokemon.name}
              url={this.state.pokemon.url}
            />
          ) : null}
          <div className="fixed-bottom">
            <span>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  background: "grey",
                  opacity: "90%",
                  textAlign: "center",
                  marginTop: "100px",
                  float: "right"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
