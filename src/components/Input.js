import React from "react";

class Input extends React.Component {
  state = {
    value: "",
  };
  inputHandle = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          onChange={this.inputHandle}
          value={this.state.value}
        />
        <h1>{this.state.value}</h1>
      </React.Fragment>
    );
  }
}

export default Input;
