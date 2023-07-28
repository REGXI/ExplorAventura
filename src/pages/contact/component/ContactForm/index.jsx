import './index.scss'
export function ContactForm({ t }) {
  return (
    <form className="contact-form">
      <div className="box name">
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" id="name" placeholder="john deere" />
      </div>

      <div className="box email">
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@gmail.com"
        />
      </div>

      <div className="box interested">
        <label htmlFor="interested">What you are interested</label>
        <select name="interested" id="interested">
          <option value="" selected disabled>
            Selecciona una opción
          </option>
          <option value="Vacation Packages">Paquetes de vacaciones</option>
          <option value="City Tours">Tours por la ciudad</option>
          <option value="Beach Resorts">Resorts en la playa</option>
          <option value="Adventure Activities">Actividades de aventura</option>
          <option value="Cultural Experiences">Experiencias culturales</option>
          <option value="Nature Exploration">
            Exploración de la naturaleza
          </option>
          <option value="Historical Sites">Sitios históricos</option>
          <option value="Wildlife Watching">
            Observación de vida silvestre
          </option>
          <option value="Eco-Tourism">Ecoturismo</option>
          <option value="Volcano Tours">Tours de volcanes</option>
        </select>
      </div>

      <div className="box phone">
        <label htmlFor="phone">Your phone</label>
        <input type="text" name="phone" id="phone" placeholder="+505 8888" />
      </div>

      <div className="box message">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Tell us about your dream vacation"
        ></textarea>
      </div>

      <div className="box submit">
        <button type="submit">
          Just Send
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}
