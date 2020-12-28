import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Classes from "./components/Classes";
import comingSoon from "./components/ComingSoon";
import home from "./components/Home";
import Overview from "./components/Overview";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route path="/" exact component={home}/>
      <Route path="/classes" component={Classes}/>
      <Route path="/overview" component={Overview}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
