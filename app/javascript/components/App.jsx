import React from "react";
import Home from "./Home";
import "tailwindcss/tailwind.css";
import Register from "../components/Register";
import { Router } from "@reach/router";
import Navbar from "./Navbar";
import ReportView from "./ReportView";
import Login from "./Login"

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Register path="/registers" />
        <ReportView path="/reports" />
        <Login path="/login" />
      </Router>
    </>
  );
}

export default App;
