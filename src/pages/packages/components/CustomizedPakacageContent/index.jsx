import { useEffect, useState } from 'react'
import './index.scss'
import { optionsPlaces } from '../../../../data/allOptionPlace'
import { CompleteInfoContact } from '../CompleteInfoContact'
import { useModal } from '../../../../hooks/useModal'
import { AnimatePresence } from 'framer-motion'
import { notify } from '../../../../services/notification'
import Modal from '../../../../components/Modal'
export const CustomizedPackageContent = ({ t, handleClose }) => {
  const [sites, setSites] = useState()
  const [sitesSelected, setSitesSelected] = useState([])
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal()

  useEffect(() => {
    setSites(optionsPlaces)
  }, [])

  const handleSubmitPlace = (e) => {
    e.preventDefault()
    const place = e.target.destination.value

    if (sitesSelected.includes(place)) {
      return notify('warn', 'This place is already selected')
    }

    setSitesSelected([...sitesSelected, place])
  }

  const deleteSiteSelected = (site) => {
    const newSitesSelected = sitesSelected.filter((item) => item !== site)
    setSitesSelected(newSitesSelected)
  }

  return (
    <>
      <div className="customized-package-content">
        <div className="description">
          <p>
            Customize your package and discover the charming Islets of Granada!
            We are looking forward to receiving your request and we will reply
            to you as soon as possible. Get ready for an unforgettable adventure
            together!
          </p>
        </div>

        <form className="renderer-sites" onSubmit={handleSubmitPlace}>
          <div className="destination">
            <label htmlFor="destination">{t('Destination')}</label>
            <select
              name="destination"
              id="destination"
              // value={values.destination}
              // onChange={handleSelectChange}
            >
              {sites?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="button-submit">
            <button>
              <i className="fas fa-plus"></i>
              {t('Add')}
            </button>
          </div>
        </form>

        <div className="sites-selected">
          <h3>{t('Sites selected')}</h3>
          <ul>
            {sitesSelected.length <= 0 ? (
              <li>{t('No sites selected')}</li>
            ) : (
              sitesSelected.map((site, index) => (
                <li key={index} className={index % 2 && 'colored'}>
                  <span>{site}</span>
                  <button onClick={() => deleteSiteSelected(site)}>
                    <i className="fas fa-times"></i>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="complete-info">
          <button className="info" onClick={handleOpenModal}>
            {t('Complete info')}
          </button>

          <button className="cancel" onClick={handleClose}>
            {t('Cancel')}
          </button>
        </div>
      </div>

      <AnimatePresence initial={true} onExitComplete={handleCloseModal}>
        {isOpenModal && (
          <Modal handleClose={handleCloseModal}>
            <CompleteInfoContact
              handleCloseModal={handleCloseModal}
              t={t}
              searchPlaceState={setSitesSelected}
              notify={notify}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}
