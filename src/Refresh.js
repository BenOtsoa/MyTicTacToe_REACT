import React, { Component } from "react";

class Refresh extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button onClick={e => this.props.refresh()} className="refresh">
          Refresh
        </button>
      </div>
    );
  }
}

export default Refresh;
