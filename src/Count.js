import React, { Component } from 'react';

export default class Count extends Component {
  state = {
    count: 0,
    number: '',
  }

  onClickAddOne = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  onClickMinusOne = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  onClickAddNumber = () => {
    const { count, number } = this.state;
    const numberParsed = parseInt(number, 10) || 0;
    this.setState({ count: count + numberParsed });
  };

  onChangeNumber = event => {
    this.setState({ number: event.target.value });
  };

  render() {
    return (
      <div>
        Count is {this.state.count}
        <button onClick={this.onClickAddOne}>Add One</button>
        <button onClick={this.onClickMinusOne}>Minus One</button>
        <input onChange={this.onChangeNumber} />
        <button onClick={this.onClickAddNumber}>Add Number</button>
      </div>
    );
  }
}
