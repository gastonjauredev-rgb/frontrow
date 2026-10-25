import '../../styles/components/HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Descubrí artistas',
    description:
      'Explorá artistas y encontrá a quienes querés ver en vivo.',
  },
  {
    number: '02',
    title: 'Seguí a tus favoritos',
    description:
      'Guardá tus artistas favoritos para estar al tanto de sus próximos conciertos.',
  },
  {
    number: '03',
    title: 'Recibí alertas',
    description:
      'Enterate cuando se anuncien nuevas fechas o se habilite la venta de entradas.',
  },
];

function HowItWorks() {
  return (
    <section
      className="how-it-works"
      id="como-funciona"
      aria-labelledby="how-it-works-title"
    >
      <div className="container">
        <header className="how-it-works__header">
          <span className="how-it-works__eyebrow">
            SIMPLE Y DIRECTO
          </span>

          <h2
            id="how-it-works-title"
            className="how-it-works__title"
          >
            Cómo funciona FrontRow
          </h2>

          <p className="how-it-works__description">
            Elegí la música que te gusta. FrontRow está pensado
            para ayudarte a descubrir conciertos y no perderte
            el momento en que salen las entradas.
          </p>
        </header>

        <div className="how-it-works__grid">
          {steps.map((step) => (
            <article
              className="how-it-works__card"
              key={step.number}
            >
              <span
                className="how-it-works__number"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <h3 className="how-it-works__card-title">
                {step.title}
              </h3>

              <p className="how-it-works__card-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;