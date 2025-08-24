import React from "react";

function NavBar() {
  return (
    <nav className="border-bottom py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="/media/logo.svg" alt="Logo" style={{ width: "160px" }} />
        </div>

        {/* Navigation Links */}
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-muted">Signup</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
