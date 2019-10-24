import React from "react";
import Home from "./Home";
import Register from "../components/Register";
import { Router, Link } from "@reach/router";
import Navbar from "./Navbar";
import ReportView from "./ReportView"

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Register path="/registers" />
        <ReportView path="/reports" />
      </Router>
    </>
  );
}

export default App;
