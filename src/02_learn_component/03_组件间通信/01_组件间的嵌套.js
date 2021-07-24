import React, { Component } from "react";

//Header
function Header() {
  return <h2>我是Header组件</h2>;
}

//Footer
function Footer() {
  return <h2>Footer</h2>;
}

//Main
function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}

function Banner() {
  return <h2>Banner</h2>;
}

function ProductList() {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  );
}

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}
