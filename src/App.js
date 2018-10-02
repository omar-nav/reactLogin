import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import LoginContainer from "./components/LoginContainer";
import ProductsContainer from "./components/products/ProductsContains";
import ProductsDisplay from "./components/products/ProductsDisplay";
class App extends Component {
  render() {
    return (
      <div className="pollollon">
        <div className="App">
          <ProductsContainer />
        </div>
      </div>
    );
  }
}

export default App;
