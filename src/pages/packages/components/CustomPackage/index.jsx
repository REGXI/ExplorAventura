import './index.scss'
export function CustomPackage({ randomDestination }) {
  return (
    <div className="custome-packages__container">
      <section className="custom-packages__content">
        <div className="pacakges__content_title">
          <h2>customize your package</h2>
        </div>

        <div className="pacakges__content_img">
          <img
            src={randomDestination.place?.image}
            alt="Paquetes personalizados | ExplorAventura"
          />

          <div className="pacakges__content_img__info">
            <div className="destination">
              <small>Team Tours</small>
              <h2>ExplorAventura</h2>
            </div>
          </div>
        </div>

        <button>
          <span>To Order Tour</span>
        </button>
      </section>

      <section className="packages__contact">
        <p>Haz tu viaje a medida con nosotros, te ayudaremos a planificarlo</p>
        <pre>
          <span>Inicia cuando quieras</span>
          <span>Termina cuando quieras</span>
          <span>Viaja donde quieras</span>
        </pre>
      </section>
    </div>
  )
}
