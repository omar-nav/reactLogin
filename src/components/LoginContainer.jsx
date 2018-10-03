import React, { Component } from "react";
import LoginDisplay from "./LoginDisplay";

export default class LoginContainer extends Component {
  state = {
    error: null,
    clase: null,
    type: "password",
    user: {}
  };

  onSubmit = e => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(this.state.user))
    this.props.history.push('/')
  }

  onChange = e => {
    // comprobar en tiempo real que el email es correct
    const { value, name } = e.target;
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
    const { user } = this.state
    user[name] = value
    // rojo no tiene arroba
    // amarillo no es tu correo
    // verde todo chido
    this.setState({ user })
  };

  changeType = e => {
    if (e.target.checked) {
      const type = "text";
      this.setState({ type });
    } else {
      const type = "password";
      this.setState({ type });
    }
  };

  render() {
    const { error, clase, type } = this.state;
    return (
      <div>
        <LoginDisplay
          //2 pasarle el error al dsiplay
          clase={clase}
          error={error}
          type={type}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          changeType={this.changeType}
        />
      </div>
    );
  }
}
