import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    //引用类型
    this.state = {
      friends: [
        { name: "John", age: 34 },
        { name: "Doe", age: 88 },
        { name: "Smith", age: 66 },
      ],
    };
  }

  shouldComponentUpdate(newProps, newState) {
    if (newState.friends !== this.state.friends) {
      return true;
    }
    return false;
  }

  insertData = () => {
    //1.在开发中不要这样做
    // const newData = { name: "John", age: 34 };
    // this.state.friends.push(newData);
    // this.setState({ friends: this.state.friends });

    //2.推荐做法
    const newFriends = [...this.state.friends];
    newFriends.push({ name: "tom", age: 34 });
    this.setState({
      friends: newFriends,
    });
  };

  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    })
  }

  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={index}>
                姓名：{item.name}
                年龄：{item.age}
                <button onClick={e=>this.incrementAge(index)}>年龄+1</button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={(e) => {
            this.insertData();
          }}
        >
          添加数据
        </button>
      </div>
    );
  }
}
