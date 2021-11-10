import Login from "./MyComponent/Login";
import Register from "./MyComponent/Register";
import TopBar from "./MyComponent/TopBar";
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App(){
  return(
    <>
    <Router>
    <TopBar></TopBar>
    <Switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/register" component = {Register}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;