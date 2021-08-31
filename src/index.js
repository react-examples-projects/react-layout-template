import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/index.css";
import "./styles/hamburgers.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
