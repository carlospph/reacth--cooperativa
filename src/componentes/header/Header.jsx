import React from 'react';
import './Header.css';

import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <a href="" className="nav-link">
          <Link to="/" className="logo">
            <i className="fa-brands fa-java"></i>
            <span>Dev</span>
          </Link>
        </a>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
