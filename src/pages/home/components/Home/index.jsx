import './index.scss'
import { Link } from 'react-router-dom'
import Sanjuandelsur from '../../../../assets/images/sanjuandelsur.jpg'
import Islaometepe from '../../../../assets/images/islaometepe.jpg'
import Isletasgranada from '../../../../assets/images/isletasgranada.jpg'
import Leon from '../../../../assets/images/leon.jpg'
export function Home({ t }) {
  return (
    <div className="home-content">
      <section className="image-galery">
        <div className="galery-content">
          <figure>
            <img src={Sanjuandelsur} alt="" className="image-gallery__image" />
          </figure>
          <figure className="up">
            <img src={Islaometepe} alt="" className="image-gallery__image" />
          </figure>
          <figure>
            <img src={Isletasgranada} alt="" className="image-gallery__image" />
          </figure>
          <figure className="up">
            <img src={Leon} alt="" className="image-gallery__image" />
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
