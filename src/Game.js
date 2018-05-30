import React, { Component } from "react";
import Board from "./Board";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board joueurs={this.props.joueurs} />
        </div>
      </div>
    );
  }
}

export default Game;
