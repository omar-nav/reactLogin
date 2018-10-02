import React, { Component } from "react";
import LoginDisplay from "./LoginDisplay";

export default class LoginContainer extends Component {
  state = {
    error: null,
    clase: null
  };

  onSubmit = e => {
    e.preventDefault();
    if (e.target.email.value !== "bliss@hot.com") {
      const error = "tu correo esta mal";
      this.setState({ error });
      //1.- comprobar email y password sean correctos
    } else if (e.target.pass.value !== "123") {
      const error = "tu pass esta mal";
      this.setState({ error });
    } else {
      this.setState({ error: null });
    }
  };

  onChange = e => {
    // comprobar en tiempo real que el email es correct
    const { value } = e.target;
    if (!value.includes("@")) {
      const clase = "error";
      const error = "Esto no tiene forma de correo";
      this.setState({ error, clase });
      //
    } else if (value !== "omar.navarro@g.austincc.edu") {
      const clase = "warning";
      const error = "no es tu correo";
      this.setState({ error, clase });
    } else {
      this.setState({ error: null, clase: "success" });
    }
    // rojo no tiene arroba
    // amarillo no es tu correo
    // verde todo chido
  };

  render() {
    const { error, clase } = this.state;
    return (
      <div>
        <LoginDisplay
          //2 pasarle el error al dsiplay
          clase={clase}
          error={error}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
