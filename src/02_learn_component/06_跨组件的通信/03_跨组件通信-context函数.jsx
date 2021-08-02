import React, { Component } from "react";

//创建context对象
const UserContext = React.createContext({
  nickname: "aaa",
  level: -1,
});

const ProfileHeader = (props) => {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>username: {value.nickname}</h2>
            <h2>userLevel: {value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>setting1</li>
        <li>setting2</li>
        <li>setting3</li>
        <li>setting4</li>
      </ul>
    </div>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "code",
      level: 99,
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
