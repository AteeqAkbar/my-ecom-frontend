import React from "react";
// import "./hamburger.scss";

const Hamburger = () => {
  return (
    <header>
      <nav className="menu--right" role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="menuItem">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Show me more</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Hamburger;
