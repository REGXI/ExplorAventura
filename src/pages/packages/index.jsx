import './index.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchPlaces } from './components/SearchPlace'
import { getAllPlaces, getPlacesByDestination } from '../../services/getPlaces'
import { RenderPlaces } from './components/RenderPlaces'
export default function PackagesPage() {
  const { t } = useTranslation()
  const [places, setPlaces] = useState(getAllPlaces())
  const [focusedPlace, setFocusedPlace] = useState({})

  const handleClickedPlace = (place) => setFocusedPlace({ ...place })

  useEffect(() => {
    setFocusedPlace(places[0])
  }, [places])

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
          <RenderPlaces
            places={places}
            t={t}
            handleClickedPlace={handleClickedPlace}
          />
        </div>
      </section>
      <section className="package-container">
        <div className="image-place">
          <img src={focusedPlace?.image} alt="Place ExplorAventura" />
        </div>

        <div className="information-place">
          <div className="title-place">
            <h3>{focusedPlace?.name}</h3>
            <p>{focusedPlace?.description}</p>
          </div>

          <div className="options-package"></div>
        </div>
      </section>
    </div>
  )
}
