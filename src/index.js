import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Classes from "./Classes";
import Overview from "./Overview";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route path="/classes" component={Classes}/>
      <Route path="/overview" component={Overview}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
