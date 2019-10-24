import React from "react";
import { logout } from "../services/user";
import { navigate } from "@reach/router"

function Navbar() {
  return (
    <>
      <button
        onClick={() => {
          logout();
          navigate("/login")
        }}
      >
        Logout
      </button>
      <hr />
    </>
  );
}

export default Navbar;
