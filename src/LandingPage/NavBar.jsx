import React from "react";
import { Link, Links } from "react-router-dom";

function NavBar() {
  return (
    <nav className="border-bottom py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link className="nav-link" to="/">
            <img src="/media/logo.svg" alt="Logo" style={{ width: "160px" }} />
          </Link>
          
        </div>

        {/* Navigation Links */}
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-muted">Signup</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="#">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="#">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="#">Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
