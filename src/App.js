// single page application SPA

import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import LoginContainer from "./components/LoginContainer";
// import ProductsContainer from "./components/products/ProductsContains";
// import ProductsDisplay from "./components/products/ProductsDisplay";
//import FormContainer from "./components/forms/FormContainer";
import Routes from "./Routes";
import { Link, NavLink } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="pollollon">
        <nav>
          <NavLink activeClassName="ihatemyboss" exact to="/">
            Inicio
          </NavLink>
          <NavLink activeClassName="ihatemyboss" to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="ihatemyboss" to="/new">
            Nuevo producto
          </NavLink>
        </nav>
        <Routes />
        {/* el router esta pintando el componente */}
      </div>
    );
  }
}

export default App;
