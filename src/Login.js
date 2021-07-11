import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.searchpng.com/wp-content/uploads/2019/01/Amazon-Logo.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <from>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </from>
        <p>
          By signing-in you agree to Amazon's clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create Amazon Account
        </button>
        {/* 3:51:22  not matching recheck*/}
      </div>
    </div>
  );
}

export default Login;
