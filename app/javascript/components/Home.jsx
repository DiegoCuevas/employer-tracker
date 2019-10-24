import React from 'react';
import { Link } from "@reach/router";

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/registers">Registers</Link>
      <Link to="/reports">Reports</Link>
    </div>
  );
}

export default Home;