import Login from "./MyComponent/Login";
import Register from "./MyComponent/Register";
import TopBar from "./MyComponent/TopBar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./MyComponent/NotFound";


function App() {
  return (
    <>
<<<<<<< HEAD
    <Router>
    <TopBar></TopBar>
    <Switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/register" component = {Register}/>
    </Switch>
    </Router>
=======
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
>>>>>>> 6ef94a30c5d6b78903204d81870357a5e6b45303
    </>
  );
}

export default App;