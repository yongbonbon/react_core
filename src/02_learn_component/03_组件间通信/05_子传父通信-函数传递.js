import React, { Component } from "react";

class CounterButton extends React.Component {
  render() {
    const { increment } = this.props;
    return <button onClick={increment}>+1</button>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+</button>
        <CounterButton increment={this.increment} />
      </div>
    );
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
