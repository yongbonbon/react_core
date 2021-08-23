import React, { PureComponent } from "react";
import { EventEmitter } from "events";
//事件总线：event bus
const eventBus = new EventEmitter();

class Home extends React.PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(num,message) {
      console.log(num,message);
  }

  render() {
    return <div>Home</div>;
  }
}

class Profile extends React.PureComponent {
  emmitEvent() {
    eventBus.emit("sayHello", "Hello Home", 123);
  }

  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.emmitEvent()}>点击profile按钮</button>
      </div>
    );
  }
}

export default class App extends PureComponent {
    
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
