import { optionsPlaces, durationOptions } from '../../../../data/allOptionPlace'
import { useForm } from '../../../../hooks/useForm'
import {
  getPlacesByDestination,
  getAllPlaces
} from '../../../../services/getPlaces'
import './index.scss'
export function SearchPlaces({ setPlaces, className, t }) {
  const initialValues = {
    destination: 'all',
    period: '',
    duration: '1',
    travellers: ''
  }

  const [values, handleInputChange, reset, handleSelectChange] =
    useForm(initialValues)

  const handleSubmit = (event) => {
    event.preventDefault()
    const { destination } = values

    destination === 'all'
      ? setPlaces(getAllPlaces())
      : setPlaces(getPlacesByDestination(destination))
  }

  return (
    <form className={`seach-place ${className}`} onSubmit={handleSubmit}>
      <div className="destination">
        <label htmlFor="destination">{t('Destination')}</label>
        <select
          name="destination"
          id="destination"
          value={values.destination}
          onChange={handleSelectChange}
        >
          <option value="all">{t('All')}</option>
          {optionsPlaces?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="period">
        <label htmlFor="period">{t('Period')}</label>
        <input
          type="date"
          name="period"
          id="period"
          placeholder="Period"
          onChange={handleInputChange}
          value={values.period}
        />
      </div>
      <div className="duration">
        <label htmlFor="duration">{t('Duration')}</label>
        <select
          name="duration"
          id="duration"
          value={values.duration}
          onChange={handleSelectChange}
        >
          {durationOptions?.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.value} {t(option.label)}
              </option>
            )
          })}
        </select>
      </div>
      <div className="travellers">
        <label htmlFor="travellers">{t('Travellers')}</label>
        <input
          type="number"
          name="travellers"
          id="travellers"
          placeholder="0"
          onChange={handleInputChange}
          value={values.travellers}
        />
      </div>

      <div className="button">
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  )
}
