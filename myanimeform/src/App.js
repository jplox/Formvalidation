import Login from "./MyComponent/Login"; // ```jsx inside MyComponent
import Register from "./MyComponent/Register"; // ```jsx inside MyComponent
import TopBar from "./MyComponent/TopBar"; // ```jsx inside MyComponent
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; // import Router ,Switch , Route , Redirect from react-router-dom
import NotFound from "./MyComponent/NotFound";
import LandingPage from "./MyComponent/LandingPage";

/**
 * @description:This function contains multiple JSX components 
 * @author: Ankith Rakesh
 * @returns mutiple JSX components i.e TopBar, Register , Login 
 */
function App() {
  return (
    <>
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Redirect exact from="/" to='/landingpage' />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;