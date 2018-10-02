import React from "react";

const FormDisplay = ({ onChange, onSubmit }) => {
  return (
    <div>
      <h2>Alta de producto</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="nombre del producto"
          name="name"
          type="text"
        />
        <br />
        <input
          onChange={onChange}
          placeholder="precio del producto"
          name="price"
          type="number"
        />
        <br />
        <input
          onChange={onChange}
          placeholder="link del producto"
          name="pic"
          type="text"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default FormDisplay;
