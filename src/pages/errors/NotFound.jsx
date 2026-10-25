import { Link } from 'react-router-dom';

import '../../styles/pages/errors/NotFound.css';

function NotFound() {
  return (
    <section
      className="not-found"
      aria-labelledby="not-found-title"
    >
      <div className="container not-found__container">
        <span className="not-found__code" aria-hidden="true">
          404
        </span>

        <span className="not-found__eyebrow">
          PÁGINA NO ENCONTRADA
        </span>

        <h1
          id="not-found-title"
          className="not-found__title"
        >
          Parece que te perdiste el show.
        </h1>

        <p className="not-found__description">
          La página que estás buscando no existe
          o cambió de dirección.
        </p>

        <Link to="/" className="not-found__button">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;