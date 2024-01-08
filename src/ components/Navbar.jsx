import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-center">
      <span className="logo">Mixmaster</span>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/newsletter" className="nav-link">
          NewsLetter
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
