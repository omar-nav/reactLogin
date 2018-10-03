import React from "react";
import { Route } from "react-router-dom";
import ProductsContains from "./components/products/ProductsContains";
import LoginContainer from "./components/LoginContainer";
import FormContainer from "./components/forms/FormContainer";
import ProductDetail from "./components/products/ProductDetail";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={ProductsContains} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/new" component={FormContainer} />
      {/* colocar ID despues */}
      {/* hoc high order component */}
      <Route path="/:id" component={ProductDetail} />
    </div>
  );
};

export default Routes;
