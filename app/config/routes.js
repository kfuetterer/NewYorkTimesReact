import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import Main from "../components/Main";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
        {}
        <Route path="Search" component={Search} />
        {}
        <Route path="Saved" component={Saved} />
    </Route>
  </Router>
);
export default routes;