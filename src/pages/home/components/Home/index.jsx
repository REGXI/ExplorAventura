import './index.scss'
import { Link } from 'react-router-dom'
import Nicaragua from '../../../../assets/images/nicaragua2.webp'

import { SearchPlaces } from '../../../packages/components/SearchPlace'
export function Home({ t }) {
  return (
    <div className="home-content">
      <section className="image-galery">
        <div className="galery-content">
          <figure>
            <img
              loading="lazy"
              src={Nicaragua}
              alt=""
              className="image-gallery__image"
            />
          </figure>
        </div>
      </section>

      <section className="home-description">
        <h1>{t('home.home-title')}</h1>
        {/* <h2>The Experience in Nicaragua</h2> */}
        <p>{t('home.home-description')}</p>
        {/* <Link to="/contact" className="custome-buttom">
          {t('home.contact-use')}
        </Link> */}
        <SearchPlaces className={'home-search'} />
      </section>
    </div>
  )
}
