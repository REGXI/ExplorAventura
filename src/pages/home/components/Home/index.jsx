import './index.scss'
import { Link } from 'react-router-dom'
export function Home({ t }) {
  return (
    <div className="home-content">
      <section className="image-galery">
        <div className="galery-content">
          <figure>
            <img
              src="https://via.placeholder.com/180x370"
              alt=""
              className="image-gallery__image"
            />
          </figure>
          <figure className="up">
            <img
              src="https://via.placeholder.com/180x370"
              alt=""
              className="image-gallery__image"
            />
          </figure>
          <figure>
            <img
              src="https://via.placeholder.com/180x370"
              alt=""
              className="image-gallery__image"
            />
          </figure>
          <figure className="up">
            <img
              src="https://via.placeholder.com/180x370"
              alt=""
              className="image-gallery__image"
            />
          </figure>
        </div>
      </section>

      <section className="home-description">
        <h1>ExplorAventura</h1>
        <h2>The Experience in Nicaragua</h2>
        <p>{t('home.home-description')}</p>
        <Link to="/contact" className="custome-buttom">
          {t('home.contact-use')}
        </Link>
      </section>
    </div>
  )
}
