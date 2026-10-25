import { Link } from 'react-router-dom';

import '../../styles/layout/Footer.css';

const footerNavigation = [
  { label: 'Inicio', path: '/' },
  { label: 'Artistas', path: '/artistas' },
  { label: 'Conciertos', path: '/conciertos' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__content">
          <div className="site-footer__brand">
            <Link
              to="/"
              className="site-footer__logo-link"
              aria-label="FrontRow - Ir al inicio"
            >
              <img
                src="/logo-frontrow.png"
                alt="FrontRow"
                className="site-footer__logo"
                loading="lazy"
              />
            </Link>

            <p className="site-footer__description">
              Descubrí conciertos, seguí a tus artistas
              favoritos y preparate para vivir la música
              en vivo.
            </p>

            <span className="site-footer__tagline">
              BE FIRST. BE THERE.
            </span>
          </div>

          <nav
            className="site-footer__navigation"
            aria-label="Navegación del pie de página"
          >
            <h2 className="site-footer__heading">
              Explorar
            </h2>

            <ul className="site-footer__links">
              {footerNavigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="site-footer__link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {currentYear} FrontRow. Todos los derechos reservados.
          </p>

          <p className="site-footer__credits">
            Hecho para quienes viven la música.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;