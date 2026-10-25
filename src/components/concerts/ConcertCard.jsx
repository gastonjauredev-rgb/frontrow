import '../../styles/components/ConcertCard.css';

const TICKET_STATUS = {
  coming_soon: {
    label: 'Próximamente',
    className: 'concert-card__status--coming-soon',
  },
  on_sale: {
    label: 'Entradas a la venta',
    className: 'concert-card__status--on-sale',
  },
  sold_out: {
    label: 'Agotado',
    className: 'concert-card__status--sold-out',
  },
};

function ConcertCard({ concert }) {
  const {
    artistName,
    venue,
    city,
    country,
    date,
    ticketStatus,
    ticketUrl,
    image,
  } = concert;

  const eventDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat('es-UY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(eventDate);

  const formattedTime = new Intl.DateTimeFormat('es-UY', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(eventDate);

  const status = TICKET_STATUS[ticketStatus] ?? {
    label: 'Estado por confirmar',
    className: 'concert-card__status--unknown',
  };

  const canBuyTickets = ticketStatus === 'on_sale' && Boolean(ticketUrl);

  return (
    <article className="concert-card">
      <div className="concert-card__media">
        {image ? (
          <img
            src={image}
            alt={`Concierto de ${artistName}`}
            className="concert-card__image"
            loading="lazy"
          />
        ) : (
          <div className="concert-card__placeholder" aria-hidden="true">
            <span>{artistName.charAt(0).toUpperCase()}</span>
          </div>
        )}

        <span className={`concert-card__status ${status.className}`}>
          {status.label}
        </span>
      </div>

      <div className="concert-card__content">
        <h3 className="concert-card__artist">{artistName}</h3>

        <p className="concert-card__venue">{venue}</p>

        <p className="concert-card__location">
          {city}, {country}
        </p>

        <div className="concert-card__date">
          <time dateTime={date}>
            {formattedDate} · {formattedTime} h
          </time>
        </div>

        <div className="concert-card__actions">
          {canBuyTickets ? (
            <a
              href={ticketUrl}
              className="concert-card__button concert-card__button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver entradas
            </a>
          ) : (
            <span className="concert-card__availability">
              {ticketStatus === 'sold_out'
                ? 'Entradas agotadas'
                : 'Compra no disponible'}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ConcertCard;