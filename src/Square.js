import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  toX(e) {
    this.props.upxORy(this.props.value);
    this.props.counter();
    this.setState({ active: true });
  }

  render() {
    const regex = new RegExp("\\d");
    return (
      <button
        className="square"
        onClick={() => this.toX()}
        disabled={this.state.active}
      >
        {regex.test(this.props.value) === true ? " " : this.props.value}
      </button>
    );
  }
}

export default Square;
