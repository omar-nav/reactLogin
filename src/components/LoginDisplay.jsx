import React from "react";
import styles from "./LoginDisplay.module.css";

const LoginDisplay = ({ onSubmit, error }) => {
  return (
    <div className={styles.pollollon}>
      <h1>Inicia Sesión</h1>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="email" />

        <input name="pass" type="password" placeholder="password" />
        <p>{error}</p>

        <input type="submit" value="ok" />
      </form>
    </div>
  );
};

export default LoginDisplay;
