import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Login.css";

async function loginUser(credentials) {
  return fetch("https://api.bybits.co.uk/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application / json",
      environment: "mock",
    },
    body: {
      username: credentials.username,
      password: credentials.password,
      type: "USER_PASSWORD_AUTH",
    },
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    console.log(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Sign In</h1>
      <div className="footer"></div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
