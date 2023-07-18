import './index.scss'
import { Link } from 'react-router-dom'
import Sanjuandelsur from '../../../../assets/images/sanjuandelsur.webp'
import Islaometepe from '../../../../assets/images/islaometepe.webp'
import Isletasgranada from '../../../../assets/images/isletasgranada.webp'
import Leon from '../../../../assets/images/leon.webp'
export function Home({ t }) {
  return (
    <div className="home-content">
      <section className="image-galery">
        <div className="galery-content">
          <figure>
            <img
              loading="lazy"
              src={Sanjuandelsur}
              alt=""
              className="image-gallery__image"
            />
          </figure>
          <figure className="up">
            <img
              loading="lazy"
              src={Islaometepe}
              alt=""
              className="image-gallery__image"
            />
          </figure>
          <figure>
            <img
              loading="lazy"
              src={Isletasgranada}
              alt=""
              className="image-gallery__image"
            />
          </figure>
          <figure className="up">
            <img
              loading="lazy"
              src={Leon}
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
