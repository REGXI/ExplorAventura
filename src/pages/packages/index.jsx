import './index.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchPlaces } from './components/SearchPlace'
import { getAllPlaces, getPlacesByDestination } from '../../services/getPlaces'
import { RenderPlaces } from './components/RenderPlaces'
import { FocusedItemPlace } from './components/FocusedItemPlace'
import { CustomPackage } from './components/CustomPackage'
import { useDispatch, useSelector } from 'react-redux'
import { selectNavigationColor } from '../../store/features/navigationColorSlice'
import { useParams } from 'react-router-dom'
import { useModal } from '../../hooks/useModal'
import Modal from '../../components/Modal'
import { AnimatePresence } from 'framer-motion'
import { CompleteInfoContact } from './components/CompleteInfoContact'
import {
  selectSearchPlaces,
  validateSearchPlaceData
} from '../../store/features/searchPlaceSlice'
import TransitionPage from '../transitonPage'
import { notify } from '../../services/notification'
import PackageContainer from './PackageContainer'

const PackagesPage = () => {
  const { t } = useTranslation()
  const [places, setPlaces] = useState(getAllPlaces())
  const [focusedPlace, setFocusedPlace] = useState({})
  const dispatch = useDispatch()

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal()

  const { destination } = useParams()
  const searchPlaceState = useSelector(selectSearchPlaces)

  const handleClickedPlace = (place) => setFocusedPlace({ ...place })

  useEffect(() => {
    dispatch(selectNavigationColor('default'))
  }, [dispatch])

  useEffect(() => {
    setFocusedPlace(places[0])
  }, [places])

  useEffect(() => {
    if (destination) {
      setPlaces(getPlacesByDestination(destination.replace(/-/g, ' ')))
    }
  }, [destination])

  const toggleContactAgent = () => {
    const validate = validateSearchPlaceData(searchPlaceState)

    if (validate) {
      return notify({ type: 'warn', message: t(validate) })
    }

    handleOpenModal()
  }

  return (
    <>
      <div className="packages-page">
        <section className="package">
          <section className="information-package">
            <div className="title">
              <h1>{t('Buy Vacation Packages at the Best Prices')}</h1>
              <p>{t('Explore Best Selling Package')}</p>

              <button onClick={toggleContactAgent}>
                {t('Contact with Agent')}
              </button>
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

        <section className="package">
          <PackageContainer t={t} />
        </section>

        <section className="custom-packages">
          <CustomPackage t={t} />
        </section>
      </div>

      <AnimatePresence initial={false} onExitComplete={handleCloseModal}>
        {isOpenModal && (
          <Modal modalOpen={isOpenModal} handleClose={handleCloseModal}>
            <CompleteInfoContact
              handleCloseModal={handleCloseModal}
              t={t}
              searchPlaceState={searchPlaceState}
              notify={notify}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}

export default TransitionPage(PackagesPage)
