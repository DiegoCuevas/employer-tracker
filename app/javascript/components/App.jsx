import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "../components/Register"
import { Router, Link } from "@reach/router";

function App() {
  return (
    <Router>
      <Home path="/home"/>
      <Login path="/"/>
      <Register path="/registers"/>
    </Router>
  );
}

export default App;
