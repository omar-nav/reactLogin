import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import LoginContainer from "./components/LoginContainer";
// import ProductsContainer from "./components/products/ProductsContains";
// import ProductsDisplay from "./components/products/ProductsDisplay";
//import FormContainer from "./components/forms/FormContainer";
import Routes from "./Routes";
class App extends Component {
  render() {
    return (
      <div className="pollollon">
        <Routes />
        {/* el router esta pintando el componente */}
      </div>
    );
  }
}

export default App;
