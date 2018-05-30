import React, { Component } from "react";
import "./App.css";
import logo from "./tictactoe.svg";
import Game from "./Game";
import Player from "./Player";
import ListeJoueurs from "./ListeJoueurs";
import Refresh from "./Refresh";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      alert: false
    };
    this.newPlayer = this.newPlayer.bind(this);
    this.refresh = this.refresh.bind(this);
  }
  refresh() {
    this.setState({ users: [] });
  }
  newPlayer(player) {
    const users = [player.name, ...this.state.users];
    users.length <= 2
      ? this.setState({ users })
      : this.setState({ alert: true });
  }
  render() {
    let afficher = "cacher";
    this.state.alert === true ? null : (afficher = "afficher");
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Tic Tac Toe :)</h1>
        <Game joueurs={this.state.users} />
        <Player newPlayer={this.newPlayer} />
        <div className={afficher}>
          Il ne peut pas y avoir plus de deux joueurs
        </div>
        <ListeJoueurs liste={this.state.users} />
        <Refresh refresh={this.refresh} />
      </div>
    );
  }
}

export default App;
