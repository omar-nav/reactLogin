import React, { Component } from "react";
import LoginDisplay from "./LoginDisplay";

export default class LoginContainer extends Component {
  state = {
    error: null
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

  render() {
    const { error } = this.state;
    return (
      <div>
        <LoginDisplay
          //2 pasarle el error al dsiplay
          error={error}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
