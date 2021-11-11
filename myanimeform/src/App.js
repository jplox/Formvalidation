import Login from "./MyComponent/Login";
import Register from "./MyComponent/Register";
import TopBar from "./MyComponent/TopBar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./MyComponent/NotFound";


function App() {
  return (
    <>
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Redirect exact from = "/" to ='/login'/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;