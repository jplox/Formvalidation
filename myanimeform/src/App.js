import Login from "./MyComponent/Login"; // ```jsx inside MyComponent
import Register from "./MyComponent/Register"; // ```jsx inside MyComponent
import TopBar from "./MyComponent/TopBar"; // ```jsx inside MyComponent
import React from "react";
<<<<<<< HEAD
import MainPage from "./MyComponent/MainPage";
import NotFound from "./MyComponent/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; // import Router ,Switch , Route , Redirect from react-router-dom

=======
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; // import Router ,Switch , Route , Redirect from react-router-dom
import NotFound from "./MyComponent/NotFound";
import LandingPage from "./MyComponent/LandingPage";
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9

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
<<<<<<< HEAD
          <Redirect exact from="/" to="/login" />
=======
          <Redirect exact from="/" to='/landingpage' />
          <Route exact path="/landingpage" component={LandingPage} />
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/MainPage" component={MainPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
