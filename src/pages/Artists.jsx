import { useState } from 'react';

import ArtistGrid from '../components/artists/ArtistGrid.jsx';
import ArtistSearch from '../components/artists/ArtistSearch.jsx';

import { artists } from '../mocks/artists.mock.js';

import '../styles/pages/Artists.css';

function Artists() {
  const [search, setSearch] = useState('');

  const normalizedSearch = search.trim().toLocaleLowerCase();

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLocaleLowerCase().includes(normalizedSearch)
  );

  return (
    <section
      className="artists-page"
      id="artistas"
      aria-labelledby="artists-title"
    >
      <div className="container">
        <header className="artists-page__header">
          <span className="artists-page__eyebrow">
            DESCUBRÍ TU PRÓXIMO SHOW
          </span>

          <h2
            id="artists-title"
            className="artists-page__title"
          >
            Explorá artistas
          </h2>

          <p className="artists-page__description">
            Descubrí artistas, explorá su música y preparate
            para enterarte de sus próximos conciertos.
          </p>
        </header>

        <ArtistSearch
          value={search}
          onChange={setSearch}
        />

        <ArtistGrid artists={filteredArtists} />
      </div>
    </section>
  );
}

export default Artists;