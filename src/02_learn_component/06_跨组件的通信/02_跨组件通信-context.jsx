import React, { Component } from "react";

//创建context对象
const UserContext = React.createContext({
  nickname: "aaa",
  level: -1,
});

class ProfileHeader extends React.Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>username:{this.context.nickname}</h2>
        <h2>userLevel:{this.context.level}</h2>
      </div>
    );
  }
}

ProfileHeader.contextType = UserContext;

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
