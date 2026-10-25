import { NavLink } from 'react-router-dom';

import '../../styles/layout/Header.css';

const navigation = [
  { label: 'Inicio', path: '/' },
  { label: 'Artistas', path: '/artistas' },
  { label: 'Conciertos', path: '/conciertos' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__container">
        <NavLink
          to="/"
          className="site-header__brand"
          aria-label="FrontRow - Ir al inicio"
        >
          <img
            src="/logo-frontrow.png"
            alt="FrontRow"
            className="site-header__logo"
          />
        </NavLink>

        <nav
          className="site-header__nav"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'site-header__link site-header__link--active'
                  : 'site-header__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__login"
            disabled
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            className="site-header__register"
            disabled
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;