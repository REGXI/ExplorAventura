import './packageContainer.scss'
import { getPackageItems } from '../../data/packages'
import { PackageItem } from './components/PackageItem'
import { useEffect, useState, useRef } from 'react'
import Accordion from '../../components/Accordion'
import rightLargeIcon from '../../assets/svg/rightLarge.svg'
import { useTranslation } from 'react-i18next'
import Carousel from '../../components/Carousel'
import { CompleteInfoContact } from './components/CompleteInfoContact'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

export default function PackageContainer() {
  const { t } = useTranslation()

  const [packagItems, setPakageItems] = useState()
  const [focusedPackage, setFocusedPackage] = useState()
  const [focusedPackageTrajectory, setFocusedPackageTrajectory] = useState()
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal()

  const pacakageImageFocus = useRef()

  useEffect(() => {
    setPakageItems(getPackageItems())
    setFocusedPackage(getPackageItems()[0])
    setFocusedPackageTrajectory(getPackageItems()[0].trajectory[0])
  }, [])

  const handleClickPackage = (item) => setFocusedPackage(item)

  const handleClickViewSiteItem = (item) => {
    setFocusedPackageTrajectory(item)

    pacakageImageFocus.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  const handleContactAgent = () => {
    handleOpenModal()
  }

  return (
    <>
      <div className="packageContainer">
        <section className="packageContainer__descriptions-fields">
          <div className="packageContainer__title">
            <h2>
              <span className="fixed-span">{t('UNFORGETTABLE TOURS')}</span>
              <span className="iconRight">
                {t('ARE')} <img src={rightLargeIcon} alt="icon" />
              </span>
              <span>{t('WAITING FOR')}</span>
              <span className="you">{t('YOU')}</span>
            </h2>
          </div>
          <div className="packageContainer__description">
            <h3>
              {focusedPackage?.title}
              <br />
              <span>{focusedPackage?.duration}</span>
            </h3>
            <p>{t('Package description')}</p>
            <button onClick={handleContactAgent}>{t('contact agent')}</button>
          </div>
        </section>
        <section className="packageContainer__focused-package">
          <div className="packageContainer__focused-package__image">
            <img
              src={focusedPackageTrajectory?.image}
              alt="package"
              ref={pacakageImageFocus}
            />
            <h3>{focusedPackageTrajectory?.site}</h3>
          </div>
        </section>
        <section className="packageContainer__packages">
          <div className="content_package">
            <h3>{t('Other Packages')}</h3>
            <div className="content_package__items">
              {
                <Carousel
                  arrayCarousel={packagItems}
                  RenderComponent={PackageItem}
                  onClickedItem={handleClickPackage}
                />
              }
            </div>
          </div>

          <div className="content_package-trajectory">
            <h3>{t('Trajectory')}</h3>
            <div className="content_package-trajectory-focused__items">
              {focusedPackage?.trajectory?.map((item, index) => (
                <Accordion
                  key={index}
                  title={t(item.title) + ' ' + (index + 1)}
                  subtitle={t(item.route)}
                  description={t(item.description)}
                  site={t(item.site)}
                  enableButton={true}
                  titleButton={t('View site')}
                  onClickedButton={() => handleClickViewSiteItem(item)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence initial={true} onExitComplete={handleCloseModal}>
        {isOpenModal && (
          <Modal handleClose={handleCloseModal}>
            <CompleteInfoContact
              handleCloseModal={handleCloseModal}
              t={t}
              searchPlaceState={{
                message: '',
                interested: focusedPackage?.title
              }}
              templateEmail="contact"
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}
