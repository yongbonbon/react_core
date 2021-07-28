import React, { Component } from "react";

import TabControl from "./TabControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: "new",
      titles: ["new", "popular", "star"]
    };
  }

  itemClick(index) {
    this.setState({ currentTitle: this.state.titles[index] });
  }

  render() {
    const { currentTitle, titles } = this.state;
    return (
      <div>
        <TabControl
          itemClick={(index) => this.itemClick(index)}
          titles={titles}
        />
        <h2>{currentTitle}</h2>
      </div>
    );
  }
}
