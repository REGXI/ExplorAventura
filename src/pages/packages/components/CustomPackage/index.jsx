import granada_isletas_de_granada from '../../../../assets/images/granada_isletas_granada.webp'
import Modal from '../../../../components/Modal'
import { useModal } from '../../../../hooks/useModal'
import { AnimatePresence } from 'framer-motion'
import { CustomizedPackageContent } from '../CustomizedPakacageContent'
import './index.scss'
export function CustomPackage({ t }) {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <div className="custome-packages__container">
        <section className="custom-packages__content">
          <div className="pacakges__content_title">
            <h2>{t('customize your package')}</h2>
          </div>

          <div className="pacakges__content_img">
            <img
              src={granada_isletas_de_granada}
              alt="Paquetes personalizados | ExplorAventura"
            />

            <div className="pacakges__content_img__info">
              <div className="destination">
                <small>{t('To Order Tour')}</small>
                <h2>ExplorAventura</h2>
              </div>
            </div>
          </div>

          <button onClick={handleOpenModal}>
            <span>{t('To Order Tour')}</span>
          </button>
        </section>

        <section className="packages__contact">
          <p>
            {t('Make your tailor-made trip with us, we will help you plan it')}
          </p>
          <pre>
            <span>{t('Start whenever you want')}</span>
            <span>{t('finish whenever you want')}</span>
            <span>{t('travel where you want')}</span>
          </pre>
        </section>
      </div>

      <AnimatePresence initial={false} onExitComplete={handleCloseModal}>
        {isOpenModal && (
          <Modal handleClose={handleCloseModal}>
            <CustomizedPackageContent t={t} handleClose={handleCloseModal} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}
