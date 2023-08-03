import './index.scss'
import { ContactForm } from './component/ContactForm'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectNavigationColor } from '../../store/features/navigationColorSlice'
import TransitionPage from '../transitonPage'

const ContactPage = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(selectNavigationColor('default'))
  }, [dispatch])

  return (
    <div className="contact_page">
      <div className="contact-container">
        <div className="title">
          <h1>{t('Love to hear from you!, Get in touch with us. 👋')}</h1>
        </div>

        <div className="contact-content">
          <ContactForm t={t} />
        </div>
      </div>
    </div>
  )
}

export default TransitionPage(ContactPage)
