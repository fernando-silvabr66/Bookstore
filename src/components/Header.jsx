import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

const Header = () => (
  <header className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-5">
      <div className="container">
        <h1 className="display-4">BookStore CMS</h1>
        <div className="navbar-collapse">
          <ul className="navbar-nav m-5">
            <li className="nav-item active m-5">
              <Link to="/Bookstore/books" className="nav-link text-uppercase">Books</Link>
            </li>
            <li className="nav-item m-5">
              <Link to="/Bookstore/categories" className="nav-link text-uppercase">Categories</Link>
            </li>
          </ul>
        </div>
        <div>
          <i className="fa fa-user"> </i>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
