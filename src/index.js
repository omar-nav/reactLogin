import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// 1 traemos el tipo de router que queremos
import { BrowserRouter } from "react-router-dom";

// 2 instalamos el router (wrapper)
// una composicion en react es pasarle un componente a otro componente
const WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 3 sustituimos el componente
ReactDOM.render(<WithRouter />, document.getElementById("root"));

ReactDOM.render(<WithRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
