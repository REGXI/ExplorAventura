import { useForm } from '../../../../hooks/useForm'
import { sendEmail } from '../../../../services/sendEmail'
import { notify } from '../../../../services/notification'

import './index.scss'
export function ContactForm({ t }) {
  const initialValues = {
    name: '',
    email: '',
    interested: '',
    phone: '',
    message: ''
  }

  const [values, handleInputChange, clear] = useForm(initialValues)

  const handleSubmit = async (e) => {
    e.preventDefault()
    notify({ type: 'info', message: t('sending email') })

    const response = await sendEmail('contact', e.target)

    if (response.status === 200) {
      clear()
      notify({ type: 'success', message: t('send email success') })
    } else {
      notify('error', t('send email error'))
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="box name">
        <label htmlFor="name">{t('Your name')}</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="john deere"
          onChange={handleInputChange}
          value={values.name}
          required
        />
      </div>

      <div className="box email">
        <label htmlFor="email">{t('Your email')}</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@gmail.com"
          onChange={handleInputChange}
          value={values.email}
          required
        />
      </div>

      <div className="box interested">
        <label htmlFor="interested">{t('What you are interested')}</label>
        <select
          name="interested"
          id="interested"
          onChange={handleInputChange}
          value={values.interested}
          required
        >
          <option value="">{t('Select an option')}</option>
          <option value="City Tours">{t('City Tours')}</option>
          <option value="Beach Resorts">{t('Beach Resorts')}</option>
          <option value="Adventure Activities">
            {t('Adventure Activities')}
          </option>
          <option value="Cultural Experiences">
            {t('Cultural Experiences')}
          </option>
          <option value="Nature Exploration">{t('Nature Exploration')}</option>
          <option value="Historical Sites">{t('Historical Sites')}</option>
          <option value="Wildlife Watching">{t('Wildlife Watching')}</option>
          <option value="Eco-Tourism">{t('Eco-Tourism')}</option>
          <option value="Volcano Tours">{t('Volcano Tours')}</option>
        </select>
      </div>

      <div className="box phone">
        <label htmlFor="phone">{t('Your phone')}</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="+505 8888"
          onChange={handleInputChange}
          value={values.phone}
          required
        />
      </div>

      <div className="box message">
        <label htmlFor="message">{t('Message')}</label>
        <textarea
          name="message"
          id="message"
          placeholder={t('Tell us about your dream vacation')}
          onChange={handleInputChange}
          value={values.message}
          required
        ></textarea>
      </div>

      <div className="box submit">
        <button type="submit">
          {t('Just Send')}
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </form>
  )
}
