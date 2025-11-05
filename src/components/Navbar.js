import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo and Brand */}
        <div className="nav-logo">
          <img
            src="/images/child.png"
            alt="Bitfix Logo"
            className="logo"
          />
          <span className="logo-text">
          </span>
        </div>
        {/* Desktop Links Centered */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-item${isActive ? " active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Contact Button Right */}
        <div className="nav-contact-wrapper">
          <Link to="/contact" className="nav-item nav-contact-btn">Contact</Link>
        </div>
        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-item${isActive ? " active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="/contact"
              className="nav-item nav-contact-btn"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
