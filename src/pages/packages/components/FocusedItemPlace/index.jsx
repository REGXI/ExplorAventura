import { useTranslation } from 'react-i18next'

export function FocusedItemPlace({ focusedPlace }) {
  const { t } = useTranslation()
  return (
    <>
      <div className="image-place">
        <img src={focusedPlace?.image} alt="Place ExplorAventura" />
      </div>

      <div className="information-place">
        <div className="title-place">
          <h3>{focusedPlace?.name}</h3>
          <p>{t(focusedPlace?.description)}</p>
        </div>
        <div className="options-package"></div>
      </div>
    </>
  )
}
