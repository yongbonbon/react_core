import React, { Component } from "react";

const Children = (props) => {
  const { name, age, height } = props;
  return (
    <div>
      <h2>子组件展示数据：{name + "-=" + age + "--" + height}</h2>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Children name="why" age="18" height="1.88" />
        <Children name="bb" age="23" height="1.88" />
      </div>
    );
  }
}
