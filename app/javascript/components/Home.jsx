import React from 'react';
import { Link } from "@reach/router";

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/registers">Registers</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </div>
  );
}

export default Home;