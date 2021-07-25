import React, { Component } from "react";
import PropTypes from "prop-types";

const Children = (props) => {
  const { name, age, height, names } = props;
  return (
    <div>
      <h2>子组件展示数据：{name + "--" + age + "--" + height}</h2>
      <ul>
        {names.map((item, index) => {
          debugger
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

Children.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array,
};

Children.defaultProps = {
  name: 'children',
  age: 25,
  height: 2.22,
  names:['adad'],
};


export default class App extends Component {
  render() {
    return (
      <div>
        <Children name="why" age={18} height={1.88} names={["ada", "da"]}/>
        <Children name="bb" age={18} height={1.88} names={["ada", "da"]} />
        <Children />
      </div>
    );
  }
}
