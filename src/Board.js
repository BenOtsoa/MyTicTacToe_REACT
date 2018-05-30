import React, { Component } from "react";
import Square from "./Square";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      count: true,
      gameplayOne: [],
      gameplayTwo: [],
      win: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      winner: ""
    };
    this.updateValue = this.updateValue.bind(this);
    this.counter = this.counter.bind(this);
    this.save = this.save.bind(this);
    this.youWon = this.youWon.bind(this);
  }

  renderSquare(i) {
    return (
      <Square value={i} upxORy={this.updateValue} counter={this.counter} />
    );
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate");
    //Créations de conditions pour lancer l'actualisation du composant
    let countX = this.state.value.filter(elt => elt === "X").length;
    let countO = this.state.value.filter(elt => elt === "O").length;
    if (
      countX !== this.state.gameplayOne.length ||
      countO !== this.state.gameplayTwo.length
    ) {
      this.save();
    }
    // console.log(countX);
    // console.log(this.state.gameplayOne.length);
    if (this.state.winner === "") {
      this.compare();
    }
  }

  save() {
    let copy = [...this.state.value];
    // console.log(copy);

    let gameplayOne = [];
    let gameplayTwo = [];
    if (this.state.count === false) {
      copy.map((elt, index) => {
        return elt === "X" ? gameplayOne.push(index) : null;
      });
      this.setState({ gameplayOne });
    } else {
      copy.map((elt, index) => {
        return elt === "O" ? gameplayTwo.push(index) : null;
      });
      this.setState({ gameplayTwo });
    }

    // console.log(gameplayOne, gameplayTwo);
  }

  compare() {
    let result1 = this.state.gameplayOne;
    let result2 = this.state.gameplayTwo;
    let win = [...this.state.win];
    // console.log("log result1: ", result1, " et result2: ", result2);
    let tabTrueFalse1 = [];
    let tabTrueFalse2 = [];
    let winningLine = [];

    if (this.state.gameplayOne.length >= 3) {
      tabTrueFalse1 = win.map(elt =>
        elt.every(element => result1.includes(element))
      );
    }
    if (this.state.gameplayTwo.length >= 3) {
      tabTrueFalse2 = win.map(elt =>
        elt.every(element => result2.includes(element))
      );
    }

    tabTrueFalse1.includes(true) ? this.youWon(1) : null;
    tabTrueFalse2.includes(true) ? this.youWon(2) : null;
  }
  youWon(number) {
    console.log(number);

    if (number === 1 || number === 2) {
      let winner = "";
      number === 1
        ? (winner = (
            <div className="winner">{this.props.joueurs[1]} YOU WON !!</div>
          ))
        : (winner = (
            <div className="winner">{this.props.joueurs[0]} YOU WON !!</div>
          ));
      this.setState({ winner });
    }
  }
  counter() {
    this.state.count === true
      ? this.setState({ count: false })
      : this.setState({ count: true });
  }

  updateValue(xORy) {
    // console.log("titi");
    const tab = this.state.value;
    const value = tab.map(elt => {
      if (elt === xORy && this.state.count) {
        return "X";
      } else if (elt === xORy && !this.state.count) {
        return "O";
      } else {
        return elt;
      }
    });
    this.setState({ value });
  }

  render() {
    let status = "";
    if (this.props.joueurs !== undefined && this.props.joueurs.length === 2) {
      this.state.count === true
        ? (status = "Next player:" + this.props.joueurs[1])
        : (status = "Next player:" + this.props.joueurs[0]);
    } else {
      status = "Nobody has checked in yet";
    }
    // let messVictoire = this.youWon();
    // console.log(messVictoire);

    // messVictoire === ""
    //   ? (messVictoire = null)
    //   : (messVictoire = this.youWon());

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.state.value[0])}
          {this.renderSquare(this.state.value[1])}
          {this.renderSquare(this.state.value[2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.value[3])}
          {this.renderSquare(this.state.value[4])}
          {this.renderSquare(this.state.value[5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.value[6])}
          {this.renderSquare(this.state.value[7])}
          {this.renderSquare(this.state.value[8])}
        </div>
        {this.state.winner === "" ? null : this.state.winner}
      </div>
    );
  }
}

export default Board;
