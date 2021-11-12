/**
 * Importing all the required modules here i.e Link , useState
 */

import { Link } from "react-router-dom";
<<<<<<< HEAD
import React, { useState } from "react";
import BaseController from "../controllers";
=======
import React, { useState } from 'react';
import BaseController from "../controllers" //importing the Basecontroller module from the local location

>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9

/**
 * @author:Ankith Rakesh
 * @description: This function is generally used for  authentication purpose.
 * @returns:JSX
 */
const Login = () => {
<<<<<<< HEAD
  const [userName, setUserName] = useState(""); // intial state
=======
  const [userName, setUserName] = useState("");  // intial state
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9
  const [password, setPassword] = useState("");
  const loginUserDetails = () => {
    const body = { user_name: userName, password };
    let url = "http://localhost:1109/login";
    /**
     * @description:If its a valid user then moves to dashboard page
     * @param {String} res
     */
    const success = (res) => {
      console.log("Success", res);
      window.location.href = "/MainPage";
  
    };
    /**
     * @description:If the login details are invalid then shows alert
     * @param {String} err
     */
    const failure = (err) => {
      console.log("Error", err);
      alert("Invalid uername or password");
    };
    BaseController.sendRequest(
      url,
      "post",
      body,
      false,
      null,
      success,
      failure
    );
  };

  return (
    <>
<<<<<<< HEAD
      <div className="columns">
        <div className="column main">
          <input name="form_key" type="hidden" value="xcpFdshemaaOt8IR" />
          <div className="login-container">
            <div className="container">
              <div className="main">
                <div className="page-title-wrapper">
                  <h1 className="page-title">
                    <span className="base">Login</span>
                  </h1>
                  <p>Welcome back! Please enter email and password</p>
                </div>
                <div className="columns">
                  <div className="column main">
                    <div className="login-container">
                      <div className="block block-customer-login">
                        <div className="block-title"></div>
                        <div
                          className="block-content"
                          aria-labelledby="block-customer-login-heading"
                        >
                          <form
                            className="form form-login"
                            method="post"
                            id="login-form"
                            noValidate="novalidate"
                          >
                            <input
                              name="form_key"
                              type="hidden"
                              value="xcpFdshemaaOt8IR"
                            />{" "}
                            <fieldset
                              className="fieldset login"
                              data-hasrequired="* Required Fields"
                            >
                              <div className="field email required">
                                <label className="label" htmlFor="email">
                                  <span>Email</span>
                                </label>
                                <div className="control">
                                  <input
                                    name="login[username]"
                                    autoComplete="off"
                                    id="email"
                                    type="email"
                                    className="input-text"
                                    title="Email"
                                    data-validate="{required:true, 'validate-email':true}"
                                    aria-required="true"
                                    onChange={(event) =>
                                      setUserName(event.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="field password required">
                                <label htmlFor="pass" className="label">
                                  <span>Password</span>
                                </label>
                                <div className="control">
                                  <input
                                    name="login[password]"
                                    type="password"
                                    autoComplete="off"
                                    className="input-text"
                                    id="pass"
                                    title="Password"
                                    data-validate="{required:true}"
                                    aria-required="true"
                                    onChange={(event) =>
                                      setPassword(event.target.value)
                                    }
                                  />
                                </div>
=======
      {/* HTML of the Login form */}
      <div className="columns"><div className="column main"><input name="form_key" type="hidden" value="xcpFdshemaaOt8IR" />
        <div className="login-container">
          <div className="container">
            <div className="main">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base">Login</span>
                </h1>
                <p>Welcome back! Please enter email and password</p>
              </div>
              <div className="columns">
                <div className="column main">
                  <div className="login-container">
                    <div className="block block-customer-login">
                      <div className="block-title">
                      </div>
                      <div className="block-content" aria-labelledby="block-customer-login-heading">
                        <form className="form form-login" method="post" id="login-form" noValidate="novalidate">
                          <input name="form_key" type="hidden" value="xcpFdshemaaOt8IR" />            <fieldset className="fieldset login" data-hasrequired="* Required Fields">
                            <div className="field email required">
                              <label className="label" htmlFor="email"><span>Email</span></label>
                              <div className="control">
                                <input name="login[username]" autoComplete="off" id="email" type="email" className="input-text" title="Email" data-validate="{required:true, 'validate-email':true}" aria-required="true" onChange={(event) => setUserName(event.target.value)} />
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9
                              </div>
                              <div className="actions-toolbar">
                                <p>
                                  Not a user?{" "}
                                  <Link to="/register"> Register here</Link>
                                </p>
                                <div className="secondary">
                                  <a className="action remind" href="/">
                                  </a>
                                </div>
                                <div className="primary">
                                  <button
                                    type="button"
                                    className="action login primary btn-4"
                                    name="send"
                                    id="send2"
                                    onClick={() => loginUserDetails()}
                                  >
                                    <span>Login</span>
                                  </button>
                                </div>
                              </div>
<<<<<<< HEAD
                            </fieldset>
                          </form>
                        </div>
=======
                            </div>
                            <div className="actions-toolbar">
                              <p>Not a user? <Link to="/register"> Register here</Link></p>
                              <div className="secondary"><a className="action remind" href="/"><span className="forget">Forgot Your Password?</span></a></div>
                              {/* passing the loginUserData function to the buttom using onClick  */}
                              <div className="primary"><button type="button" className="action login primary" name="send" id="send2" onClick={() => loginUserDetails()}><span>Login</span></button></div>
                            </div>
                          </fieldset>
                        </form>
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login; // exporting Login by default
