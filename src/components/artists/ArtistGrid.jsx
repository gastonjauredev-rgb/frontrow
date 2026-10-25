import ArtistCard from './ArtistCard.jsx';

import '../../styles/components/ArtistGrid.css';

function ArtistGrid({ artists = [] }) {
  if (artists.length === 0) {
    return (
      <div className="artist-grid__empty" role="status">
        <p>No encontramos artistas para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="artist-grid">
      {artists.map((artist) => (
        <ArtistCard
          key={artist.id}
          artist={artist}
        />
      ))}
    </div>
  );
}

export default ArtistGrid;