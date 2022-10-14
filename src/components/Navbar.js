import React from "react";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_logo">tech:able</div>
        <div className="navbar_links">
          <ul>
            <li>Feature</li>
            <li>Price</li>
            <li>Blog</li>
            <li>Example</li>
            <li>About</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>
      <div className="navbar_loginBtn">
        <p className="login">Log in</p>
        <p className="freeStart">Start for free</p>
      </div>
    </div>
  );
};

export default Navbar;
