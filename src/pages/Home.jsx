import { Link } from 'react-router-dom';

import HowItWorks from '../components/home/HowItWorks.jsx';

import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home" id="inicio">
      <section
        className="home__hero"
        aria-labelledby="home-title"
      >
        <div className="container">
          <div className="home__hero-content">
            <span className="home__eyebrow">
              TU PRÓXIMO CONCIERTO EMPIEZA ACÁ
            </span>

            <h1 id="home-title" className="home__title">
              La música en vivo
              <span className="home__title-accent">
                {' '}te espera.
              </span>
            </h1>

            <p className="home__description">
              Seguí a tus artistas favoritos, descubrí sus
              próximos conciertos y recibí alertas cuando
              se anuncien nuevas fechas o salgan las entradas.
            </p>

            <div className="home__actions">
              <Link
                to="/artistas"
                className="home__button home__button--primary"
              >
                Explorar artistas
              </Link>

              <a
                href="#como-funciona"
                className="home__button home__button--secondary"
              >
                Cómo funciona
              </a>
            </div>

            <p className="home__tagline">
              BE FIRST. BE THERE.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />
    </div>
  );
}

export default Home;