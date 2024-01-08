import React from "react";
import { Link } from "react-router-dom";
function HomeLayout() {
  return (
    <div>
      <h2>HomeLayout</h2>
      <Link to="/about">About</Link>
    </div>
  );
}

export default HomeLayout;
