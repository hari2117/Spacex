import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">SpaceX</div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rocket">Rocket</Link>
            </li>
            <li>
            <Link to="/launch">launch</Link>
            </li>
            <li>
            <Link to="/history">History</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
