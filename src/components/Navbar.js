import React from "react";
import { Link } from "react-router-dom";
// import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <i className="fa-solid fa-martini-glass icons"></i>
          <span className="logo-text"> & </span>
          <i className="fa-solid fa-martini-glass-citrus icons"></i>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
