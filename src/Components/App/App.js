import React, { useState } from "react";
import "./App.css";
import UserDetails from "../UserDetails/UserDetails";
import Login from "../Login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  } else {
    return <UserDetails access={token.access_token} />;
  }
}

export default App;
