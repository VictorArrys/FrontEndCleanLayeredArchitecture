// src/components/Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '@styles/colors';
import Button from '@components/shared/button/button';

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: colors.primary }}>
      <Link className="navbar-brand text-light" to="/">Platform Works</Link>

      <Button
        label=""
        onClick={() => document.getElementById('navbarNav')?.classList.toggle('show')}
        variant="primary"
        backgroundColor="transparent"
      />

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link text-light" to="/">Inicio <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">About</Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-light"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: colors.accent }}>
              <Link className="dropdown-item" to="#">Action</Link>
              <Link className="dropdown-item" to="#">Another action</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="#">Something else here</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;