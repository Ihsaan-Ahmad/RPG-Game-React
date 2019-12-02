import React, { Component } from "react";

import PokemonList from "./PokemonList.js";
import SearchBar from "../search/SearchBar.js";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}
