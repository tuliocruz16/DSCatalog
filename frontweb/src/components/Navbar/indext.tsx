import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" end>
                {({ isActive }) =>
                  isActive ? (
                    <text style={{ color: '#FFF', fontWeight: 'bold' }}>
                      HOME
                    </text>
                  ) : (
                    <text>HOME</text>
                  )
                }
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" end>
                {({ isActive }) =>
                  isActive ? (
                    <text style={{ color: '#FFF', fontWeight: 'bold' }}>
                      CATÁLOGO
                    </text>
                  ) : (
                    <text>CATÁLOGO</text>
                  )
                }
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" end>
                {({ isActive }) =>
                  isActive ? (
                    <text style={{ color: '#FFF', fontWeight: 'bold' }}>
                      ADMIN
                    </text>
                  ) : (
                    <text>ADMIN</text>
                  )
                }
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
