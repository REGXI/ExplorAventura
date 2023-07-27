import './index.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchPlaces } from './components/SearchPlace'
import { getAllPlaces, getRamdonDestinations } from '../../services/getPlaces'
import { RenderPlaces } from './components/RenderPlaces'
import { FocusedItemPlace } from './components/FocusedItemPlace'
import { CustomPackage } from './components/CustomPackage'
export default function PackagesPage() {
  const { t } = useTranslation()
  const [places, setPlaces] = useState(getAllPlaces())
  const [focusedPlace, setFocusedPlace] = useState({})
  const [randomDestination, setRamdonDestination] = useState({})

  const handleClickedPlace = (place) => setFocusedPlace({ ...place })

  useEffect(() => {
    setFocusedPlace(places[0])
  }, [places])

  useEffect(() => {
    setRamdonDestination(getRamdonDestinations())
  }, [])

  return (
    <div className="packages-page">
      <section className="package">
        <section className="information-package">
          <div className="title">
            <h1>Buy Vacation Packages at the Best Prices</h1>
            <p>Explore Best Selling Package</p>

            <button>
              <span>Contact with Agent</span>
            </button>
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
          <FocusedItemPlace focusedPlace={focusedPlace} />
        </section>
      </section>

      <section className="custom-packages">
        <CustomPackage randomDestination={randomDestination} />
      </section>
    </div>
  )
}
