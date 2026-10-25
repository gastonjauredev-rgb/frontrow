import ConcertGrid from '../components/concerts/ConcertGrid.jsx';
import { concerts } from '../mocks/concerts.mock.js';

import '../styles/pages/Concerts.css';

function Concerts() {
  const upcomingConcerts = [...concerts]
    .filter((concert) => new Date(concert.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section
      className="concerts-page"
      id="conciertos"
      aria-labelledby="concerts-title"
    >
      <div className="container">
        <header className="concerts-page__header">
          <span className="concerts-page__eyebrow">
            NO TE PIERDAS TU PRÓXIMO SHOW
          </span>

          <h2
            id="concerts-title"
            className="concerts-page__title"
          >
            Próximos conciertos
          </h2>

          <p className="concerts-page__description">
            Descubrí los próximos conciertos de tus artistas
            favoritos, consultá las fechas y conocé el estado
            de venta de entradas.
          </p>
        </header>

        <ConcertGrid concerts={upcomingConcerts} />
      </div>
    </section>
  );
}

export default Concerts;