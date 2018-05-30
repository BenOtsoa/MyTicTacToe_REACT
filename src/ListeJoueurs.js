import React, { Component } from "react";
import "./ListeJoueurs.css";

class ListeJoueurs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.liste[1] === undefined ? (
          <div className="list-player">{this.props.liste[0]}</div>
        ) : (
          <div className="list-player">
            {this.props.liste[1]} VS {this.props.liste[0]}
          </div>
        )}
      </div>
    );
  }
}

export default ListeJoueurs;
