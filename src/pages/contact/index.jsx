import './index.scss'
import { ContactForm } from './component/ContactForm'
import { useTranslation } from 'react-i18next'
export default function ContactPage() {
  const { t } = useTranslation()

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
