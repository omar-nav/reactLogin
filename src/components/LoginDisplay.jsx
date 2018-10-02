import React from "react";
import styles from "./LoginDisplay.module.css";

const LoginDisplay = ({
  type,
  changeType,
  clase,
  onChange,
  onSubmit,
  error
}) => {
  return (
    <div className={styles.pollollon}>
      <h1>Inicia Sesión</h1>
      <form onSubmit={onSubmit}>
        <input
          className={styles[clase]}
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input name="pass" type={type} placeholder="Password" />
        <input onChange={changeType} type="checkbox" /> Mostrar contraseña
        <br />
        <p>{error}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginDisplay;
