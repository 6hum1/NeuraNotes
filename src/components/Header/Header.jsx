import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          NeuraNotes
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={({ isActive }) => (isActive ? "active" : "")}>
             Upload Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              My Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              AI-Assistant
            </NavLink>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="btn login-btn">
            Login
          </Link>
          <Link to="/signup" className="btn signup-btn">
            Sign Up
          </Link>
        </div>

      </nav>
    </header>
  );
}
