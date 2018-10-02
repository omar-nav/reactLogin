import React, { Component } from "react";
import FormDisplay from "./FormDisplay";
class FormContainer extends Component {
  state = {
    form: {}
  };

  onChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const { form } = this.state;
    form[field] = value;
  };

  render() {
    return (
      <div>
        <FormDisplay onChange={this.onChange} />
      </div>
    );
  }
}
export default FormContainer;
