import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Classes from "./components/Classes";
//import comingSoon from "./components/ComingSoon";
import Home from "./components/Home";
import Leaderboards from "./components/Leaderboards";
import Meta from "./components/Meta";
import News from "./components/News";
import Support from "./components/Support";
import Partners from "./components/Partners";
//import Overview from "./components/Overview";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/leaderboards" exact component={Leaderboards} />
        <Route path="/meta" exact component={Meta} />
        <Route path="/news" exact component={News} />
        <Route path="/support" exact component={Support} />
        <Route path="/partners" exact component={Partners} />
        {
          //<Route path="/classes" component={Classes}/>
          //<Route path="/overview" component={Overview}/>
        }
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
