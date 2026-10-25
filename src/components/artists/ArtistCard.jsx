import '../../styles/components/ArtistCard.css';

function ArtistCard({ artist }) {
  const { name, genre, country, image } = artist;

  return (
    <article className="artist-card">
      <div className="artist-card__media">
        {image ? (
          <img
            src={image}
            alt={name}
            className="artist-card__image"
            loading="lazy"
          />
        ) : (
          <div
            className="artist-card__placeholder"
            aria-hidden="true"
          >
            <span>{name.charAt(0).toUpperCase()}</span>
          </div>
        )}
      </div>

      <div className="artist-card__content">
        <h3 className="artist-card__name">{name}</h3>

        <p className="artist-card__genre">{genre}</p>

        <p className="artist-card__country">{country}</p>
      </div>
    </article>
  );
}

export default ArtistCard;