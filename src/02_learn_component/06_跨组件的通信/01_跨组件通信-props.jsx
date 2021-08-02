import React, { Component } from "react";

const ProfileHeader = (props) => {
  return (
    <div>
      <h2>username: {props.nickname}</h2>
      <h2>userLevel: {props.level}</h2>
    </div>
  );
};

const Profile = (props) => {
  return (
    <div>
      {/*<ProfileHeader nickname={props.nickname} level={props.level}/>*/}
      <ProfileHeader {...props}/>
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
    const { nickname, level } = this.state;

    return (
      <div>
        {/*<Profile nickname={nickname} level={level} />*/}
        <Profile {...this.state}/>
      </div>
    );
  }
}
