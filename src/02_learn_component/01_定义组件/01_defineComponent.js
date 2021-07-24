import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world",
    };
  }
  render() {
    return (
        <div> 
            <span>我是App组件</span>
            <h2>{this.state.message}</h2>
        </div>
    );
  }
}


