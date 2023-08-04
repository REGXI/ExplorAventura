import './index.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchPlaces } from './components/SearchPlace'
import { getAllPlaces, getPlacesByDestination } from '../../services/getPlaces'
import { RenderPlaces } from './components/RenderPlaces'
import { FocusedItemPlace } from './components/FocusedItemPlace'
import { CustomPackage } from './components/CustomPackage'
import { useDispatch } from 'react-redux'
import { selectNavigationColor } from '../../store/features/navigationColorSlice'
import { useParams } from 'react-router-dom'
import TransitionPage from '../transitonPage'
const PackagesPage = () => {
  const { t } = useTranslation()
  const [places, setPlaces] = useState(getAllPlaces())
  const [focusedPlace, setFocusedPlace] = useState({})
  const dispatch = useDispatch()

  const { destination } = useParams()

  const handleClickedPlace = (place) => setFocusedPlace({ ...place })

  useEffect(() => {
    dispatch(selectNavigationColor('default'))
  }, [dispatch])

  useEffect(() => {
    setFocusedPlace(places[0])
  }, [places])

  useEffect(() => {
    if (destination) {
      setPlaces(getPlacesByDestination(destination))
    }
  }, [destination])
  return (
    <div className="packages-page">
      <section className="package">
        <section className="information-package">
          <div className="title">
            <h1>{t('Buy Vacation Packages at the Best Prices')}</h1>
            <p>{t('Explore Best Selling Package')}</p>

            <button>{t('Contact with Agent')}</button>
          </div>

          <div className="search-package">
            <SearchPlaces setPlaces={setPlaces} t={t} />
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
        <CustomPackage t={t} />
      </section>
    </div>
  )
}

export default TransitionPage(PackagesPage)
