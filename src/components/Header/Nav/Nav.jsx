import React from 'react';

const Nav = () => {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-secondary">
        <li className="nav-link">
          <a href="src/components/Header/Nav/Nav#">Home</a>
        </li>
        <li className="nav-link">
          <a href="src/components/Header/Nav/Nav#">Company</a>
        </li>
        <li className="nav-link">
          <a href="src/components/Header/Nav/Nav#">Features</a>
        </li>
        <li className="btn">
          <a href="src/components/Header/Nav/Nav#">Sign in</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
