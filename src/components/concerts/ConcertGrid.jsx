import ConcertCard from './ConcertCard.jsx';

import '../../styles/components/ConcertGrid.css';

function ConcertGrid({ concerts = [] }) {
  if (concerts.length === 0) {
    return (
      <div className="concert-grid__empty" role="status">
        <p>No encontramos conciertos para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="concert-grid">
      {concerts.map((concert) => (
        <ConcertCard
          key={concert.id}
          concert={concert}
        />
      ))}
    </div>
  );
}

export default ConcertGrid;