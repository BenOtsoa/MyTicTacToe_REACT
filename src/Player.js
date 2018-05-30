import React, { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { filling: "" };
    this.newUser = this.newUser.bind(this);
  }
  newUser(e) {
    this.setState({
      [e.target.id]: e.target.value,
      filling: e.target.value
    });
    if (e.keycode === 13) {
      e.target.value = "";
    }
  }
  submission(e) {
    e.preventDefault();
    this.props.newPlayer(this.state);
    this.setState({ name: "" });
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={e => this.submission(e)}>
          <input
            type="text"
            placeholder="Player's name"
            onChange={this.newUser}
            id="name"
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

export default Player;
