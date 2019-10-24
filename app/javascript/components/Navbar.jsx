import React, { useState, useEffect } from "react";
import { logout } from "../services/user";

function Navbar() {
  return (
    <>
      <button onClick={logout}>Logout</button>
      <hr />
    </>
  );
}

export default Navbar;
