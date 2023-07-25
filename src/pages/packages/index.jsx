import './index.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchPlaces } from './components/SearchPlace'
import { getAllPlaces, getPlacesByDestination } from '../../services/getPlaces'
import { RenderPlaces } from './components/RenderPlaces'
export default function PackagesPage() {
  const { t } = useTranslation()
  const [places, setPlaces] = useState(getAllPlaces())
  const [imagenPlace, setImagenPlace] = useState(
    'https://placehold.co/600x400.png'
  )

  return (
    <div className="packages-page">
      <section className="information-package">
        <div className="title">
          <h1>Buy Vacation Packages at the Best Prices</h1>
          <p>Explore Best Selling Package</p>
        </div>

        <div className="search-package">
          <SearchPlaces setPlaces={setPlaces} />
        </div>

        <div className="related-places">
          <RenderPlaces places={places} t={t} />
        </div>
      </section>
      <section className="package-container">
        <div className="image-place">
          <img src={imagenPlace} alt="imagen place" />
        </div>

        <div className="information-place">
          <div className="title-place"></div>

          <div className="options-package"></div>
        </div>
      </section>
    </div>
  )
}
