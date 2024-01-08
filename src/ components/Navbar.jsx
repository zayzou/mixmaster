import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBtn = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`;
function Navbar() {
  return (
    <nav className="nav-center">
      <StyledBtn>My button</StyledBtn>
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
