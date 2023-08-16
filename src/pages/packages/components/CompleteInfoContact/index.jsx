import { useForm } from '../../../../hooks/useForm'
import {
  converObjectToHtmlForm,
  sendEmail
} from '../../../../services/sendEmail'
import './index.scss'
export const CompleteInfoContact = ({
  t,
  handleCloseModal,
  searchPlaceState,
  templateEmail = 'package',
  notify
}) => {
  const initialValues = { name: '', email: '', phone: '' }

  const [values, handleInputChange] = useForm(initialValues)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!values.name || !values.email || !values.phone) {
      notify({ type: 'error', message: t('Complete all fields') })
      return
    }

    notify({ type: 'info', message: t('Sending email...') })

    const newSearchPlaceState = {
      ...searchPlaceState,
      ...values
    }

    const response = await sendEmail(
      templateEmail,
      converObjectToHtmlForm(newSearchPlaceState)
    )

    if (response.status === 200) {
      handleCloseModal()
      notify({ type: 'success', message: t('Email sent successfully') })
    }
  }

  return (
    <div className="complete-info-contact">
      <h3>{t('Complete your contact information')}</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="box">
          <label htmlFor="name">{t('Name')}</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label htmlFor="email">{t('Email')}</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label htmlFor="phone">{t('Phone')}</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={values.phone}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn btn-primary">{t('Contact with Agent')}</button>
      </form>
    </div>
  )
}
