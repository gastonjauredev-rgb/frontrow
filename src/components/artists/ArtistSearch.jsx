import '../../styles/components/ArtistSearch.css';

function ArtistSearch({ value, onChange }) {
  return (
    <div className="artist-search">
      <label
        htmlFor="artist-search-input"
        className="artist-search__label"
      >
        Buscar artistas
      </label>

      <input
        id="artist-search-input"
        type="search"
        className="artist-search__input"
        placeholder="Ej. Coldplay, Gilsons..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
      />
    </div>
  );
}

export default ArtistSearch;