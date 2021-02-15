import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {

  return (
    <div className="wrapper">
      <header className="header">
        <h1>Characters</h1>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="App">
              <Link
                className="navbar__item"
                to="/characters">
                Home
              </Link>
            </li>
          </ul>
      </nav>
    </header>
    </div>
  )
};
