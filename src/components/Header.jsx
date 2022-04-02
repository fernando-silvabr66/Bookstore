import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/Bookstore/books">Books</Link>
        </li>
        <li>
          <Link to="/Bookstore/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
