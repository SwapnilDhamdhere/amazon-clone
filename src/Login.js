import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <from>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </from>
        <p>
          By signing-in you agree to Amazon's clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads notice.
        </p>
        <button className="login__registerButton">Create Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
