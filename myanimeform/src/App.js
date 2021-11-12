import Login from "./MyComponent/Login"; // ```jsx inside MyComponent
import Register from "./MyComponent/Register"; // ```jsx inside MyComponent
import TopBar from "./MyComponent/TopBar"; // ```jsx inside MyComponent
import React from "react";
import MainPage from "./MyComponent/MainPage";
import LandingPage from './MyComponent/LandingPage'
import NotFound from "./MyComponent/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; // import Router ,Switch , Route , Redirect from react-router-dom


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
          <Route exact path="/MainPage" component={MainPage} />
          <Route component={NotFound} />
        </Switch >
      </Router >
    </>
  );
}

export default App;
